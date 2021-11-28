import React from 'react';

import Webtoon from '../images/독립일기.png';

interface WebtoonCardProps {
  webtoon: any
}

export const ScoopWebtoonRecommendCard: React.FC<WebtoonCardProps> = ({
  webtoon
}) => {
  return (
    <div className="border rounded-2xl shadow-md mt-3 mb-20 " style={{width: "350px"}}>
      <div className="p-3">
        <div style={{backgroundImage: `url(${Webtoon})`, backgroundSize: 'cover', backgroundRepeat:"no-repeat", height:"300px"}} className="rounded-2xl flex flex-col-reverse">
          <div className="">
            <div className="rounded-b-2xl text-white text-center flex items-center justify-center text-sm font-semibold" style={{height:"35px", backgroundColor:"#2ecc71"}}>웹툰 보러 가기 {'>'} </div>
          </div>
        </div>
        <div className="grid justify-center font-bold text-2xl" style={{marginTop: "30px"}} >{webtoon.name}</div>
        <div className="grid justify-center text-gray-700 text-base mx-auto w-2/3 mt-5">{(webtoon.description.length > 35) ? webtoon.description.substring(0,35) + '..' : webtoon.description}</div>
      </div>
      <div className="rounded-b-2xl text-white text-center flex items-center justify-center text-sm font-semibold" style={{height:"35px", backgroundColor:"#5e5e5e"}}>찜하기 </div>
    </div>
   
  )
}