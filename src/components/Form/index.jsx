import { Input, TextareaComponent, SelectComponent } from "../Input";
import Button from "../Button";
import { styled } from "styled-components";

const FormWrapper = styled.form`
    display: ${(props) => props.display || 'flex'};
    flex-direction: ${(props) => props.flexDirection || 'column'};
    align-items: ${(props) => props.alignItems || 'center'};
    gap: ${(props) => props.gap || '20px'};
    width: ${(props) => props.width || ''};
    max-width: ${(props) => props.maxWidth || 'none'};
    margin-top: ${(props) => props.marginTop || '0'};
    grid-template-columns: ${(props) => props.gridTemplateColumns || 'none'};
    flex-wrap: ${(props) => props.flexWrap || 'none'};
    box-sizing: border-box;
    .button-wrapper {
        width: 100%;
        display: ${(props) => props.buttonWrapperDisplay || 'flex'};
        justify-content: space-between;
        grid-column: 1;
        gap: 30px;
    }
`;

const HeadingWrapper = styled.div`
    ${(props) => props.styles}
`;

const Heading = styled.h2`
    ${(props) => props.styles}
`;

const Form = ({ initialData, setTitle, setCategory, setImage, setVideo, setDescription, titleName, formStyles, headingWrapperStyles, headingStyles, isEdit, onSubmit }) => {
  const handleChange = (e) => {
      const { name, value } = e.target;

      switch (name) {
          case 'title':
              setTitle(value);
              break;
          case 'category':
              setCategory(value);
              break;
          case 'image':
              setImage(value);
              break;
          case 'video':
              setVideo(value);
              break;
          case 'description':
              setDescription(value);
              break;
          default:
              break;
      }
  };

  return (
      <FormWrapper 
          onSubmit={onSubmit} 
          style={formStyles}
      >
          <HeadingWrapper styles={headingWrapperStyles}>
              <Heading styles={headingStyles}>{titleName}</Heading>
          </HeadingWrapper> 
          
          <Input 
              type="text"
              name="title"
              value={initialData.title}
              onChange={handleChange}
              label="Título" 
              placeholder="Digite o título" 
              isEdit={isEdit} 
          />
          <SelectComponent 
              name="category"
              value={initialData.category}
              onChange={handleChange}
              label="Categoria" 
              isEdit={isEdit} 
          />
          <Input 
              type="text"
              name="image"
              value={initialData.image}
              onChange={handleChange}
              label="Imagem" 
              placeholder="Insira o endereço da imagem" 
              isEdit={isEdit} 
          />
          <Input 
              type="text"
              name="video"
              value={initialData.video}
              onChange={handleChange}
              label="Vídeo" 
              placeholder="Insira o endereço do vídeo" 
              isEdit={isEdit} 
          />
          <TextareaComponent 
              name="description"
              value={initialData.description}
              onChange={handleChange}
              label="Descrição" 
              placeholder="Digite a descrição do vídeo"         
              isEdit={isEdit} 
          />
          
          <div className="button-wrapper">
              <Button type="submit" highlight>Guardar</Button>
              <Button type="button" onClick={() => {
                  setTitle('');
                  setCategory('');
                  setImage('');
                  setVideo('');
                  setDescription('');
              }}>Limpar</Button>
          </div>
      </FormWrapper>
  );
};

export default Form;