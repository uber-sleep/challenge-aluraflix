import { styled } from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from '../components/Form';

const FormSectionWrapper = styled.div`
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
        <Header dark />
        
        <FormSectionWrapper>
            <TitleWrapper>
                <h1>Novo Vídeo</h1>
                <p>Complete o formulário para criar um novo card de vídeo.</p>
            </TitleWrapper>

            <Form
                title="Criar Card"
                formStyles={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    flexWrap: 'wrap',
                    gap: '60px'
                }}
                headingWrapperStyles={`
                    grid-column: span 2;
                    display: flex;
                    align-items: center;
                    margin-top: 47px;
                    border-top: 1px solid #FFF;
                    border-bottom: 1px solid #FFF;
                    height: 91px;
                `}
                headingStyles={`
                    width: 100%;
                    color: #FFF;
                    font-size: 36px;
                    font-weight: 600;
                `}
                buttonWrapperStyles={`
                    width: 473px;
                `}
            />
        </FormSectionWrapper>
        
        <Footer />
        </>        
    )
}

export default NovoVideo;
