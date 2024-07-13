// import { useCategory } from "../../context/CategoryContext";
import {styled} from "styled-components";

const StyledTag = styled.h1 `
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-size: 32px;
    font-weight: 700;
    color: #FFF;
    border-radius: 15px;
    width: ${props => props.$mobile ? "" : "432px"}; 
    height: 70px;
    background-color: ${props => {
        switch(props.$category) {
            case "frontend":
                return "#6BD1FF" 
            case "backend": 
                return "#00C86F"
            case "mobile": 
                return "#FFBA05"
        }
    }
    };
`;

const Tag = ({ children, category }) => {
    // const category = useCategory();

    return (
        <StyledTag $category={category}>{children}</StyledTag>
    )
};

export default Tag;