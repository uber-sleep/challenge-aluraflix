import Tag from "../Tag";
import VideoCard from "../VideoCard";
import { styled } from "styled-components"; 

const VideoSectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 93px;
    width: 100%;
    margin-top: -29px;
    div.row {
        display: flex;
        flex-direction: column;
        gap: 40px;
        height: 100%;
    }
    div.videos {
        display: flex;
        gap: 30px;
        width: 100%; 
    }
`;

const VideoSection = ({ categories }) => {
    const sections = [
        { category: "frontend", title: "Front End" },
        { category: "backend", title: "Back End" },
        { category: "mobile", title: "Mobile" }
    ];

    const renderSection = ({ category, title }) => (
        <div className="row" key={category}>
            <Tag category={category}>{title}</Tag>
            <div className="videos">
                {categories.filter((video) => video.subject === category).map(video => 
                    <VideoCard 
                        key={video.id} 
                        imageUrl={video.img} 
                        altText={video.description} 
                    />
                )}
            </div>  
        </div>
    );

    return (
        <VideoSectionWrapper>
            {sections.map(renderSection)}
        </VideoSectionWrapper>
    );
};

export default VideoSection;