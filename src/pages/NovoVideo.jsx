import  styled  from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from '../components/Form';
import { useState } from "react";
import { useVideo } from '../context/VideoContext';

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
    const { updateVideos } = useVideo();
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [video, setVideo] = useState("");
    const [description, setDescription] = useState("");
  
    const handlePostSubmit = async (event) => {
      event.preventDefault();
  
      const data = {
        title,
        category,
        image,
        video,
        description,
      };
  
      try {
        const response = await fetch("http://localhost:3000/list", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
  
        if (!response.ok) {
          throw new Error("Erro ao enviar os dados");
        }
  
        const result = await response.json();
        console.log("Dados enviados com sucesso:", result);
  
        updateVideos(result);
        window.location.href = '/';
        
      } catch (error) {
        console.error("Erro:", error);
      }
    };
    
    return (
        <>
        <Header dark />
        
        <main>
            <FormSectionWrapper>
                <TitleWrapper>
                    <h1>Novo Vídeo</h1>
                    <p>Complete o formulário para criar um novo card de vídeo.</p>
                </TitleWrapper>

                <Form
                    onSubmit={handlePostSubmit}
                    initialData={{ title, category, image, video, description }}
                    setTitle={setTitle}
                    setCategory={setCategory}
                    setImage={setImage}
                    setVideo={setVideo}
                    setDescription={setDescription}
                    titleText="Criar Card"
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
        </main>
        
        <Footer />
        </>        
    );
}

export default NovoVideo;
