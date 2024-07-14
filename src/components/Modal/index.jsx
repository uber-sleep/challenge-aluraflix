import { styled } from "styled-components";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Form from "../Form";

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

const Modal = ({ setModalOpen }) => {
    return (
        <ModalOverlay>
            <ModalWrapper>
                <button className="close" onClick={() => setModalOpen(false)}>
                    <IoMdCloseCircleOutline size={30} />
                </button>
                <Form
                    title="Editar card:"
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
                />
            </ModalWrapper>
        </ModalOverlay>
    );
};

export default Modal;
