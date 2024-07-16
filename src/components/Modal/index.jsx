import { styled } from "styled-components";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Form from "../Form";
import { useState, useEffect } from "react";

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); 
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000; 
    overflow-y: auto; 
`;

const ModalWrapper = styled.div`
    position: relative;
    width: 80%;
    max-width: 974px;
    padding: 60px;
    background-color: #03122F;
    border: 5px solid #6BD1FF;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 90vh; 
    overflow-y: auto; 
    button.close {
        position: absolute;
        top: 0;
        right: 0;
        background-color: transparent;
        border: none;
        color: white;
        padding: 32px;
    }
`;

const Modal = ({ setModalOpen, videoData }) => {
    const [title, setTitle] = useState(videoData.title || '');
    const [category, setCategory] = useState(videoData.category || '');
    const [image, setImage] = useState(videoData.image || '');
    const [video, setVideo] = useState(videoData.video || '');
    const [description, setDescription] = useState(videoData.description || '');

    useEffect(() => {
        setTitle(videoData.title || '');
        setCategory(videoData.category || '');
        setImage(videoData.image || '');
        setVideo(videoData.video || '');
        setDescription(videoData.description || '');
    }, [videoData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            title,
            category,
            image,
            video,
            description
        };
    
        try {
            const response = await fetch(`http://localhost:3000/list/${videoData.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                console.error('Erro na requisição:', errorData);
                throw new Error(`Erro na requisição: ${response.statusText}`);
            }
    
            const data = await response.json();
            console.log('Resposta da API:', data);
    
            setModalOpen(false);

            window.location.reload();
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
        }
    };

    return (
        <ModalOverlay>
            <ModalWrapper>
                <button 
                    className="close" 
                    onClick={() => setModalOpen(false)}
                >
                    <IoMdCloseCircleOutline size={30} />
                </button>
                <Form
                    initialData={{ title, category, image, video, description }}
                    setTitle={setTitle}
                    setCategory={setCategory}
                    setImage={setImage}
                    setVideo={setVideo}
                    setDescription={setDescription}
                    titleName="Editar Vídeo:"
                    formStyles={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '20px',
                        width: '100%',
                        maxWidth: '573px'
                    }}
                    headingWrapperStyles={`
                        border: none;
                        display: flex;
                        align-items: flex-start;
                        width: 100%;
                    `}
                    headingStyles={`
                        text-align: left;
                        font-size: 60px;
                        font-weight: 800;
                        text-transform: uppercase;
                        color: #2271D1;
                    `}
                    buttonWrapperStyles={`
                        width: 100%;
                    `}
                    isEdit
                    onSubmit={handleSubmit}
                />
            </ModalWrapper>
        </ModalOverlay>
    );
};

export default Modal;
