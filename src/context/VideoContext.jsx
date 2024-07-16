import React, { createContext, useState, useContext, useEffect } from 'react';

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);
    const [filteredVideos, setFilteredVideos] = useState({
        frontend: [],
        backend: [],
        mobile: []
    });

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch("http://localhost:3000/list");
                if (!response.ok) {
                    throw new Error(`Erro: ${response.status}`);
                }

                const data = await response.json();
                console.log(data)
                setVideos(data);
                filterVideos(data);
            } catch (error) {
                console.error('Erro ao buscar vídeos:', error);
            }
        };

        fetchVideos();
    }, []);

    const filterVideos = (videos) => {
        setFilteredVideos({
            frontend: videos.filter(video => video.category === "frontend"),
            backend: videos.filter(video => video.category === "backend"),
            mobile: videos.filter(video => video.category === "mobile")
        });
    };

    const createVideo = (newVideo) => {
        setVideos((prevVideos) => [...prevVideos, newVideo]);
        filterVideos([...videos, newVideo]);
    };


    const updateVideos = (updatedVideo) => {
        setVideos(prevVideos => prevVideos.map(video => video.id === updatedVideo.id ? updatedVideo : video));
        filterVideos(videos);  
    };

    const deleteVideo = (id) => {
        const updatedVideos = videos.filter(video => video.id !== id);
        setVideos(updatedVideos);
        filterVideos(updatedVideos);
    };

    return (
        <VideoContext.Provider value={{ videos, filteredVideos, updateVideos, deleteVideo, createVideo }}>
            {children}
        </VideoContext.Provider>
    );
};

export const useVideo = () => {
    const context = useContext(VideoContext);
    if (!context) {
        throw new Error('useVideo must be used within a VideoProvider');
    }
    return context;
};
