import { styled } from "styled-components";
import logo from '../../assets/Logo.svg';

const FooterWrapper = styled.footer`
    margin-top: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 125px;
    background-color: rgba(0, 0, 0, 0.9);
    border-top: 3px solid rgb(34, 113, 209);
    box-shadow: 0 0 12px 4px rgba(34, 113, 209, 1);
    img {
        height: 40px;
    }
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <img src={logo} alt="Logo" />
        </FooterWrapper>
    );
};

export default Footer;