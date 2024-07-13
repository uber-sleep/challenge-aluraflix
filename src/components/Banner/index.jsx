import { styled } from "styled-components";

const StyledBanner = styled.div`
    height: 832px;
    top: 102px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 18, 51, 0.56); 
    display: flex;
    align-items: center;
    img {
        width: 100%;
        height: 744px;
        position: relative;
    }
`;

const StyledCard = styled.div`
    display: flex;
    justify-content: space-around;
    position: absolute;
`;

const StyledWrapper = styled.div`
    max-width: 50%;
    h1 {
        font-size: 48px;
        font-weight: 700;
        padding: 24px;
        background-color: #6BD1FF;
        color: #FFF;
        border-radius: 15px;
        max-width: fit-content;    
        margin-bottom: 40px;
        text-transform: uppercase;
}
    h2{
        font-size: 46px;
        margin-bottom: 10px;
        color: #FFF;
    }
    p {
        font-size: 18px;
        font-weight: 300;
        color: #FFF;
    }

`;

const Banner = () => {
    return (
        <>
        <StyledBanner>
            <img src="src/assets/player.png" />
            <StyledCard>
               <StyledWrapper>
                    <h1>Front End</h1>

                    <h2>SEO com React</h2>
                    
                    <p>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"!</p>
                </StyledWrapper> 
                
                <iframe width="420" height="315"
                src="https://www.youtube.com/embed/c8mVlakBESE?si=_wCBnGHoc-BmpjMO">
                </iframe>
            </StyledCard>
        </StyledBanner>
        </>
    )
};

export default Banner;