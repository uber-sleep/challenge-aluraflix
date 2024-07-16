import VideoCard from '../VideoCard';
import Tag from '../Tag';
import styled from 'styled-components';
import { useVideo } from '../../context/VideoContext';

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

const VideoSection = () => {
  const { filteredVideos } = useVideo();

  return (    
      <VideoSectionWrapper>
          <div className="row">
              <Tag category="frontend">Front End</Tag>
              <div className="videos">
                  {filteredVideos.frontend.map(video => (
                      <VideoCard 
                          key={video.id}
                          imageUrl={video.image}
                          altText={video.description}
                          video={video}
                      />
                  ))}
              </div>
          </div>        
          <div className="row">
              <Tag category="backend">Back End</Tag>
              <div className="videos">
                  {filteredVideos.backend.map(video => (
                      <VideoCard 
                          key={video.id}
                          imageUrl={video.image}
                          altText={video.description}
                          video={video}
                      />
                  ))}
              </div>
          </div>        
          <div className="row">
              <Tag category="mobile">Mobile</Tag>
              <div className="videos">
                  {filteredVideos.mobile.map(video => (
                      <VideoCard 
                          key={video.id}
                          imageUrl={video.image}
                          altText={video.description}
                          video={video}
                      />
                  ))}
              </div>
          </div>        
      </VideoSectionWrapper>
  );
};

export default VideoSection;