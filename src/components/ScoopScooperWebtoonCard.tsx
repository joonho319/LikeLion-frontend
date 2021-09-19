import React from 'react';
import { Link } from 'react-scroll';

import Webtoon from '../images/독립일기.png';

interface WebtoonCardProps {
  webtoon: any
}

export const ScoopScooperWebtoonCard: React.FC<WebtoonCardProps> = ({
  webtoon
}) => {
  return (
    <Link to={'/scooperWebtoon'}>
      <div style={{backgroundImage: `url(${Webtoon})`, backgroundSize: '100% 60%', backgroundRepeat:"no-repeat", width:"100%", height:"230px"}} 
                className="group p-4 rounded-2xl border"
      >
        <div className="grid justify-center font-bold text-lg" style={{marginTop: "130px"}}  >{webtoon.title}</div>
        <div className="grid justify-start text-gray-700 text-xs">{webtoon.date}</div>
      </div>
    </Link>
   
  )
}