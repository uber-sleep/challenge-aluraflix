import styled from "styled-components";

const BaseInput = styled.input`
  width: ${props => props.$isEdit ? "573px" : "470px"};
  height: 62px;
  background-color: ${props => props.$isEdit ? "#03122F" : "#191919"};
  border: 3px solid;
  border-color: ${props => props.$isEdit ? "#2271D1" : "#262626"};
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
 width: ${props => props.$isEdit ? "573px" : "470px"};
  height: auto;
  min-height: 120px;
  resize: vertical;
`;

const Select = styled(BaseInput).attrs({ as: 'select' })`
 width: ${props => props.$isEdit ? "573px" : "470px"};
  height: 62px;
`;

const Input = ({ label, placeholder, isEdit }) => (
  <InputWrapper>
    <label>{label}</label>
    <BaseInput placeholder={placeholder} $isEdit={isEdit}/>
  </InputWrapper>
);

const TextareaComponent = ({ label, placeholder, isEdit }) => (
  <InputWrapper>
    <label>{label}</label>
    <Textarea placeholder={placeholder} $isEdit={isEdit}/>
  </InputWrapper>
);

const SelectComponent = ({ label, isEdit }) => (
  <InputWrapper> 
    <label>{label}</label>
    <Select $isEdit={isEdit}>
      <option value="">Selecione uma opção</option>
      <option value="option1">Opção 1</option>
      <option value="option2">Opção 2</option>
    </Select>
  </InputWrapper>
);

export { Input, TextareaComponent, SelectComponent };

