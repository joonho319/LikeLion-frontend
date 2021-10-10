import React from 'react';

import Webtoon from '../images/독립일기.png';

interface ScooperCardProps {
  scooper: any
}

export const ScoopScooperCard: React.FC<ScooperCardProps> = ({
  scooper
}) => {
  return (
    <>
      <div className="md:hidden">
        <div style={{backgroundImage: `url(${Webtoon})`, backgroundSize: 'cover', backgroundRepeat:"no-repeat", height: "70px"}} className="rounded-full"></div>
        <div className="grid justify-center text-xs mt-3 "  >{scooper.name}</div>
      </div>

      <div className="hidden md:grid">
        <div style={{backgroundImage: `url(${Webtoon})`, backgroundSize: 'cover', backgroundRepeat:"no-repeat", height: "120px"}} className="rounded-full"></div>
        <div className="justify-center text-xs mt-3 hidden md:grid"  >{scooper.name}</div>
      </div>
    
    </>
   
  )
}