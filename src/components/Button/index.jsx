import {styled} from "styled-components";

const StyledButton = styled.button`
    width: 180px;
    height: 54px;
    border: 2px solid;
    border-color: ${props => props.$highlight ? "#2271D1" : "#FFFFFF" };
    border-radius: 10px;
    font-size: 20px;
    font-weight: bold;
    background-color: ${props => props.$highlight ? "rgba(0, 0, 0, 0.9)" : "transparent"};
    color: ${props => props.$highlight ? "#2271D1" : "#FFFFFF"};
    text-transform: uppercase;
    line-height: 24px;
    box-shadow: ${props => props.$highlight ? "inset 0 0 12px 4px rgba(34, 113, 209, 1)" : "none"};
    cursor: pointer;
`;

const Button = ({ type, children, highlight = false, onClick }) => {
    return (
      <StyledButton 
        type={type} 
        $highlight={highlight} 
        onClick={onClick}
      >
        {children}
      </StyledButton>
    );
  };

export default Button;