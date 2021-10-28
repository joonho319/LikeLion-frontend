import React from 'react';

import Webtoon from '../images/독립일기.png';

interface WebtoonCardProps {
  webtoon: any
}

export const ScoopWebtoonRecommendCard: React.FC<WebtoonCardProps> = ({
  webtoon
}) => {
  return (
    <div className="border rounded-xl p-3 shadow-md mt-3 mb-20" style={{width: "380px"}}>
      <div>
        <img className="bg-cover rounded-xl w-full"  src={Webtoon} alt=""/>
      </div>
      <div className="grid justify-center font-bold text-2xl" style={{marginTop: "30px"}} >{webtoon.name}</div>
      <div className="grid justify-center text-gray-700 text-base mx-auto w-2/3 mt-5">{(webtoon.description.length > 35) ? webtoon.description.substring(0,35) + '..' : webtoon.description}</div>
    </div>
   
  )
}