import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { styled } from "styled-components";
import Modal from "../Modal";
import { useState } from "react";
import { useVideo } from "../../context/VideoContext";

const VideoCardWrapper = styled.figure`
    display: flex;
    flex-direction: column;
    border: 4px solid #6BD1FF;
    box-shadow: 0 0 12px 4px rgba(34, 113, 209, 1);
    border-radius: 10px;
    margin: 0;
    img {
        width: 432px;
        height: 260px;
        border-radius: 5px 5px 0 0;
        border-bottom: 4px solid #6BD1FF;
    }
    figcaption {
        display: flex;
        justify-content: space-around;
        align-items: center; 
        width: 100%;
        height: 100%;
        border-radius: 0 0 5px 5px;
        background-color: #262626;
    } 
    figcaption > button {
        display: flex;
        align-items: center;
        gap: 20px;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        color: #FFF;
        height: 28px;
        padding: 24px;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
`;

const VideoCard = ({ imageUrl, altText, video }) => {
    const [modalOpen, setModalOpen ] = useState(false);
    const { deleteVideo } = useVideo();

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:3000/list/${video.id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Erro ao deletar o vídeo');
            }

            deleteVideo(video.id);

            console.log('Vídeo deletado com sucesso');
        } catch (error) {
            console.error('Erro ao deletar o vídeo:', error);
        }
    };

    const handleEdit = () => {
        setModalOpen(true); 
    };

    return (
        <>
            <VideoCardWrapper>
                <img src={imageUrl} alt={altText} />
                <figcaption>
                    <button onClick={handleDelete}><FaTrash />Deletar</button>
                    <button onClick={handleEdit}><FaPencilAlt />Editar</button>
                </figcaption>
            </VideoCardWrapper>
        
            {modalOpen && <Modal setModalOpen={setModalOpen} videoData={video} />} 
        </>
    );
};

export default VideoCard;
