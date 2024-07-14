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

const Form = ({ title, isEdit, onSubmit, formStyles, headingWrapperStyles, headingStyles, buttonWrapperStyles }) => {
    return (
        <FormWrapper {...formStyles} onSubmit={onSubmit}>
            <HeadingWrapper styles={headingWrapperStyles}>
                <Heading styles={headingStyles}>{title}</Heading>
            </HeadingWrapper>
            <Input label="Título" placeholder="Digite o título" isEdit={isEdit} />
            <SelectComponent label="Categoria" placeholder="Selecione a categoria" isEdit={isEdit} />
            <Input label="Imagem" placeholder="Insira o endereço da imagem" isEdit={isEdit} />
            <Input label="Vídeo" placeholder="Insira o endereço do vídeo" isEdit={isEdit} />
            <TextareaComponent label="Descrição" placeholder="Digite a descrição" isEdit={isEdit} />
            <div className="button-wrapper">
                <Button highlight>Guardar</Button>
                <Button>Limpar</Button>
            </div>
        </FormWrapper>
    );
};

export default Form;
