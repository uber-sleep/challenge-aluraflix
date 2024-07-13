import { styled } from "styled-components";

const FooterWrapper = styled.footer`
    margin-top: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 125px;
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0 0 12px 4px rgba(34, 113, 209, 1);
    img {
        height: 40px;
    }
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <img src='src\assets\Logo.svg' />
        </FooterWrapper>
    );
};

export default Footer;