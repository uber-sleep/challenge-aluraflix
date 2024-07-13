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
    div.videos {
        display: flex;
        flex-direction: column;
        gap: 40px;
        height: 100%;
    }
    div.row {
        display: flex;
        gap: 30px;
        width: 100%; 
    }
`;

const VideoSection = () => {
    return (
        <>
        <VideoSectionWrapper>
            <div className="videos">
                <Tag category="frontend">Front End</Tag>
                <div className="row">
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                </div>    
            </div>
            <div className="videos">
                <Tag category="backend">Back End</Tag>
                <div className="row">
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                </div>    
            </div>
            <div className="videos">
                <Tag category="mobile">Mobile</Tag>
                <div className="row">
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                </div>    
            </div>
        </VideoSectionWrapper>

        </>
    )
};

export default VideoSection;
