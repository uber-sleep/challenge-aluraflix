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

const Input = ({ label, type, name, value, onChange, placeholder, isEdit}) => (
  <InputWrapper>
    <label>{label}</label>
    <BaseInput 
      type={type} 
      name={name} 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder}
      $isEdit={isEdit}
      required
    />
  </InputWrapper>
);

const TextareaComponent = ({ label, name, value, onChange, placeholder, isEdit }) => (
  <InputWrapper>
    <label>{label}</label>
    <Textarea 
      name={name} 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder}
      $isEdit={isEdit}
      required
    />
  </InputWrapper>
);

const SelectComponent = ({ label, name, value, onChange, placeholder, isEdit }) => (
  <InputWrapper> 
    <label>{label}</label>
    <Select 
      name={name} 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder}
      $isEdit={isEdit}
    >
      <option value="" selected disabled hidden>Ver opções:</option>
      <option value="frontend">Front End</option>
      <option value="backend">Back End</option>
      <option value="mobile">Mobile</option>
    </Select>
  </InputWrapper>
);

export { Input, TextareaComponent, SelectComponent };

