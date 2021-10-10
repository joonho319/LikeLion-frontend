import React from 'react';
import { Link } from 'react-router-dom';

import Webtoon from '../images/독립일기.png';

interface WebtoonCardProps {
  webtoon: any
}

export const ScoopScooperWebtoonCard: React.FC<WebtoonCardProps> = ({
  webtoon
}) => {
  return (
    <Link to={'/scooperWebtoon'}>
      <div className="md:hidden">
        <div style={{backgroundImage: `url(${Webtoon})`, backgroundSize: '100% 60%', backgroundRepeat:"no-repeat", width:"100%", height:"230px"}} 
                  className="group p-4 rounded-2xl border"
        >
          <div className="grid justify-center font-bold text-lg" style={{marginTop: "130px"}}  >{webtoon.title}</div>
          <div className="grid justify-start text-gray-700 text-xs">{webtoon.date}</div>
        </div>
      </div>

      <div className="hidden md:grid">
        <div style={{backgroundImage: `url(${Webtoon})`, backgroundSize: '100% 60%', backgroundRepeat:"no-repeat", width:"100%", height:"300px"}} 
                  className="group p-4 rounded-2xl border"
        >
          <div className="grid justify-start font-bold text-xl" style={{marginTop: "180px"}}  >{webtoon.title}</div>
          <div className="grid justify-start text-gray-700 text-sm">{webtoon.date}</div>
        </div>
      </div>
    </Link>
   
  )
}