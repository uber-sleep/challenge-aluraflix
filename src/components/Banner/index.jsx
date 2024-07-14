import { styled } from "styled-components";

const BannerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;  
    background-color: rgba(0, 18, 51, 0.56); 
    z-index: -1;
    padding-bottom: 150px;
    img {
        width: 100%;
        height: auto;  
    }
`;

const BannerCard = styled.div`
    display: flex;
    justify-content: space-around;
    position: absolute;
    max-width: 80%;
    margin: 0 auto;
`;

const BannerCardText = styled.div`
    max-width: 50%;
    h1, h2, p {
        color: #FFF;
    }
    h1 {
        font-size: 48px;
        font-weight: 700;
        padding: 24px;
        background-color: #6BD1FF;
        border-radius: 15px;
        max-width: fit-content;    
        margin-bottom: 40px;
        text-transform: uppercase;
    }
    h2 {
        font-size: 46px;
        margin-bottom: 10px;
    }
    p {
        font-size: 18px;
        font-weight: 300;
    }
`;

const Banner = ({ title, subtitle, description, videoUrl, imageUrl }) => {
    return (
        <BannerWrapper>
            <img src={imageUrl} alt="Banner Image" />
            <BannerCard>
                <BannerCardText>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <p>{description}</p>
                </BannerCardText>
                <iframe 
                    width="420" 
                    height="315"
                    src={videoUrl}
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </BannerCard>
        </BannerWrapper>
    );
};

export default Banner;
