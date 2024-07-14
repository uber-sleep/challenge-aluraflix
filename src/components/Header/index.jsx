import logo from "../../assets/Logo.svg";
import {styled } from "styled-components"; 
import Button from "../Button";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
    position: relative;
    margin-bottom: 10px;
    box-shadow:  0px 5px 3px 0px rgba(34, 113, 209, 0.7);
    border-bottom: 3px solid rgb(34, 113, 209);
    width: 100%;
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
      <StyledHeader $dark={dark}>
          <img src={logo} alt="Logo do AluraFlix" />
          <StyledDiv>
            <Link to="/"><Button highlight={dark}>Home</Button></Link>
            <Link to="/novovideo"><Button highlight={!dark}>Novo Vídeo</Button></Link>
          </StyledDiv>
      </StyledHeader>
  );
};
  
export default Header;
