import styled from "styled-components";

const BaseInput = styled.input`
  width: 470px;
  height: 62px;
  background-color: #191919;
  border: 3px solid #262626;
  border-radius: 10px;
  padding: 12px;
  color: #FFF;
  font-size: 16px;
  font-family: Arial, sans-serif;

  &:focus {
    border-color: #66afe9;
    outline: none;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  label {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    color: #FFF;
  }
`;

const Textarea = styled(BaseInput).attrs({ as: 'textarea' })`
  height: auto;
  min-height: 120px;
  resize: vertical;
`;

const Select = styled(BaseInput).attrs({ as: 'select' })`
  height: 62px;
`;

const Input = ({ label, placeholder }) => (
  <InputWrapper>
    <label>{label}</label>
    <BaseInput placeholder={placeholder} />
  </InputWrapper>
);

const TextareaComponent = ({ label, placeholder }) => (
  <InputWrapper>
    <label>{label}</label>
    <Textarea placeholder={placeholder} />
  </InputWrapper>
);

const SelectComponent = ({ label, option }) => (
  <InputWrapper>
    <label>{label}</label>
    <Select>
      <option value="">Selecione uma opção</option>
      <option value="option1">Opção 1</option>
      <option value="option2">Opção 2</option>
    </Select>
  </InputWrapper>
);

export { Input, TextareaComponent, SelectComponent };

