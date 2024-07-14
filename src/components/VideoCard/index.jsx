import { FaTrash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { styled } from "styled-components";
import Modal from "../Modal";
import { useState } from "react";

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

const VideoCard = ({ imageUrl, altText }) => {
    const [modalOpen, setModalOpen ] = useState(false);
    return(
        <>
            <VideoCardWrapper>
                <img src={imageUrl} alt={altText} />
                <figcaption>
                    <button><FaTrash />Deletar</button>
                    <button onClick={() => setModalOpen(true)}><FaPencilAlt />Editar</button>
                </figcaption>
            </VideoCardWrapper>
        
            {modalOpen && <Modal setModalOpen={setModalOpen} />}
        </>
    )
}

export default VideoCard;
