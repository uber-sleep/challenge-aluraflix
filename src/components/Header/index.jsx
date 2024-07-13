import logo from "../../assets/Logo.svg";
import {styled } from "styled-components"; 
import Button from "../Button";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.$dark ? "rgba(0, 0, 0, 0.9)" : "#262626"};
    padding: 24px;
    img {
        height: 40px;
    }
`;

const StyledDiv = styled.div`
    display: flex;
    gap: 25px;
`;

const Header = ({ dark }) => {
    return (
      dark ? (
        <StyledHeader $dark={dark}>
          <img src={logo} alt="Logo do AluraFlix" />
  
          <StyledDiv>
            <Button highlight>Home</Button>
            <Button>Novo Vídeo</Button>
          </StyledDiv>
        </StyledHeader>
      ) : (
        <StyledHeader>
          <img src={logo} alt="Logo do AluraFlix" />
  
          <StyledDiv>
            <Button>Home</Button>
            <Button highlight>Novo Vídeo</Button>
          </StyledDiv>
        </StyledHeader>
      )
    );
  };
  

export default Header;