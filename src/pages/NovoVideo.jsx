import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from '../components/Form';
import { styled } from "styled-components";

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 70px;

`;

const TitleWrapper = styled.div`
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    h1 {
        font-size: 60px;
        font-weight: 800;
    }
    p {
        font-size: 20px;
    }
`;

const NovoVideo = () => {
    return (
        <>
        <Header dark/>
        
        <FormWrapper>
            <TitleWrapper>
                <h1>Novo Vídeo</h1>
                <p>Complete o formulário para criar um novo card de vídeo.</p>
            </TitleWrapper>

            
            <Form />  
        </FormWrapper>
        
        <Footer />
        </>        
    )
}

export default NovoVideo;