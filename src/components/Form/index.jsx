import React from 'react';
import { styled } from "styled-components";
import { Input, TextareaComponent, SelectComponent } from '../Input';
import Button from '../Button';

const FormWrapper = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-wrap: wrap;
    gap: 60px;
    .button-wrapper {
        display: flex;
        grid-column: 1;
        gap: 30px;
        box-sizing: border-box;
    }
`;

const HeadingWrapper = styled.div`
    grid-column: span 2;
    display: flex;
    align-items: center;
    margin-top: 47px;
    border-top: 1px solid #FFF;
    border-bottom: 1px solid #FFF;
    height: 91px;

    h2 {
    width: 100%;
        color: #FFF;
        font-size: 36px;
        font-weight: 600;
    }
`;

const Form = () => {
  return (
    <FormWrapper>
      <HeadingWrapper>
          <h2>Criar Card</h2>
      </HeadingWrapper>          

      <Input label="categoria" placeholder="insira a categoria"/>
      <SelectComponent label="categoria"/>

      <Input label="categoria" placeholder="insira a categoria"/>
      <Input label="categoria" placeholder="insira a categoria"/>

      <TextareaComponent  label="categoria"/>

        <div className="button-wrapper">
            <Button highlight>Guardar</Button>
            <Button>Limpar</Button>
        </div>
      
    </FormWrapper>
  );
};

export default Form;
