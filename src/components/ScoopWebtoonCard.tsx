import React from 'react';

import Webtoon from '../images/독립일기.png';

interface WebtoonCardProps {
  webtoon: any
}

export const ScoopWebtoonCard: React.FC<WebtoonCardProps> = ({
  webtoon
}) => {
  return (
    // <div className="w-1/2 relative rounded-3xl" style={{height:"200px"}}>
    //   <div style={{backgroundImage: `url(${Webtoon})`, backgroundSize: 'cover', backgroundRepeat:"no-repeat", height:"150px"}} 
    //     className="absolute inset-x-0 top-0 " 
    //   >s</div>
    // </div>
    <>
    
      <div style={{backgroundImage: `url(${Webtoon})`, backgroundSize: '100% 70%', backgroundRepeat:"no-repeat", width:"100%", height:"260px"}} 
        className="group p-4 rounded-2xl border hidden md:inline-block"
      >
        <div className="grid justify-center font-bold text-2xl" style={{marginTop: "173px"}}  >{webtoon.title}</div>
        <div className="grid justify-center text-gray-700 text-base ">{webtoon.platform}</div>
      </div>


      <div style={{backgroundImage: `url(${Webtoon})`, backgroundSize: '100% 70%', backgroundRepeat:"no-repeat", width:"100%", height:"200px"}} 
        className="group p-4 rounded-2xl border md:hidden"
      >
        <div className="grid justify-center font-bold text-lg" style={{marginTop: "132px"}}  >{webtoon.title}</div>
        <div className="grid justify-center text-gray-700 text-xs">{webtoon.platform}</div>
      </div>
    </>
   
  )
}