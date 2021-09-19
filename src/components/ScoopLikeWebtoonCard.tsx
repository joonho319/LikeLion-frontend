import React from 'react';

import Webtoon from '../images/독립일기.png';

interface WebtoonCardProps {
  webtoon: any
}

export const ScoopLikeWebtoonCard: React.FC<WebtoonCardProps> = ({
  webtoon
}) => {
  return (
    <div style={{backgroundImage: `url(${Webtoon})`, backgroundSize: '100% 70%', backgroundRepeat:"no-repeat", width:"100%", height:"200px"}} 
              className="group px-2 py-1 rounded-2xl border"
    >
      <div className="grid justify-end"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
</svg></div>
      <div className="grid justify-center font-bold text-lg" style={{marginTop: "118px"}}  >{webtoon.title}</div>
      <div className="grid justify-center text-gray-700 text-xs">{webtoon.platform}</div>
     </div>
   
  )
}