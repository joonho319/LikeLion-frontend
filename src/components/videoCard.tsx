
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
    height: '790',
    width: '960',
    playerVars: {
      autoplay: autoplay,
    },
  };
  return (
    <>
      <div className="mt-10 md:hidden">
        <ReactPlayer 
          url={`https://www.youtube.com/watch?v=${videoId}`} 
          controls={true}
          width="100vw"
          height="66vw"
        />
      </div>
      <div className="mt-10 hidden md:inline">
        <ReactPlayer 
          url={`https://www.youtube.com/watch?v=${videoId}`} 
          controls={true}
          width="50vw"
          height="32vw"
        />
      </div>
    
    </>
  )
}