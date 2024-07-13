
import { FaTrash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { styled } from "styled-components";

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

const VideoCard = () => {
    return(
        <VideoCardWrapper>
            <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/pure-nature-landscape-single-tree-in-green-field-free-photo.jpg?w=600&quality=80" alt="Elephant at sunset" />
            <figcaption>
                <button><FaTrash />Deletar</button>
                <button><FaPencilAlt />Editar</button>
            </figcaption>
        </VideoCardWrapper>
    )
}

export default VideoCard;
