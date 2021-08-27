
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player';

interface VideoProps {
  videoId: string;
}


type autoPlayType = 0 | 1 | undefined
const autoplay: autoPlayType = 1;

export const VideoCard: React.FC<VideoProps> = ({
  videoId
}) => {
  const onReady = (event: any) => {
    event.target.pauseVideo();
  }

  
  const opts = {
    height: '590',
    width: '640',
    playerVars: {
      autoplay: autoplay,
    },
  };
  return (
    <ReactPlayer 
      url={`https://www.youtube.com/watch?v=${videoId}`} 
      controls={true}
    />
  )
}