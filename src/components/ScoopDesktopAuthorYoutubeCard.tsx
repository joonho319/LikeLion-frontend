import React from 'react';

import YoutubeImage from '../images/play.png';

interface YoutubeCardProps {
  Youtube: any
}

export const ScoopDesktopAuthorYoutubeCard: React.FC<YoutubeCardProps> = ({
  Youtube
}) => {
  return (
    <div>
      <div style={{backgroundImage: `url(${YoutubeImage})`, backgroundRepeat:"no-repeat", width:"100%", height:"10vw"}} 
                className="group p-4 bg-gray-300"
      >
      </div>
      <div className="font-bold text-lg">{Youtube.title}</div>
      <div className="text-gray-700 text-sm">{Youtube.author}</div>
    </div>
   
  )
}