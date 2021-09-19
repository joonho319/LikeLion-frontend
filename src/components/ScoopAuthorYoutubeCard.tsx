import React from 'react';

import YoutubeImage from '../images/play.png';

interface YoutubeCardProps {
  Youtube: any
}

export const ScoopAuthorYoutubeCard: React.FC<YoutubeCardProps> = ({
  Youtube
}) => {
  return (
    // <div className="w-1/2 relative rounded-3xl" style={{height:"200px"}}>
    //   <div style={{backgroundImage: `url(${Youtube})`, backgroundSize: 'cover', backgroundRepeat:"no-repeat", height:"150px"}} 
    //     className="absolute inset-x-0 top-0 " 
    //   >s</div>
    // </div>
    <div style={{backgroundImage: `url(${YoutubeImage})`, backgroundSize: '100% 70%', backgroundRepeat:"no-repeat", width:"100%", height:"200px"}} 
              className="group p-4 rounded-2xl border bg-gray-300"
    >
      <div className="grid justify-center font-bold text-lg" style={{marginTop: "132px"}}  >{Youtube.title}</div>
      <div className="grid justify-center text-gray-700 text-xs">{Youtube.author}</div>
     </div>
   
  )
}