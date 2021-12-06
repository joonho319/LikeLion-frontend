import React, { useState } from 'react';

import Webtoon from '../images/독립일기.png';
import { ScoopModal } from './ScoopModal';

interface WebtoonCardProps {
  webtoon: any
}

export const ScoopWebtoonRecommendCard: React.FC<WebtoonCardProps> = ({
  webtoon
}) => {
  const addWhishList = () => {
    alert(`${webtoon.name}을 찜했습니다.`)
  }
  return (
    <>
      <div className="border rounded-2xl shadow-md mt-3 mb-20 " style={{width: "340px"}}>
        <div className="p-3">
          <div style={{backgroundImage: `url(${Webtoon})`, backgroundSize: 'cover', backgroundRepeat:"no-repeat", height:"280px"}} className="rounded-2xl flex flex-col-reverse">
            <div className="">
              <a href={webtoon.src}>
              <div className="rounded-b-2xl text-white text-center flex items-center justify-center text-sm font-semibold" style={{height:"35px", backgroundColor:"#2ecc71"}}>웹툰 보러 가기 {'>'} </div>
              </a>
            </div>
          </div>
          <div className="grid justify-center font-bold text-2xl" style={{marginTop: "22px"}} >{webtoon.name}</div>
          <div className="grid justify-center text-gray-700 text-base mx-auto w-2/3 mt-3">{(webtoon.description.length > 35) ? webtoon.description.substring(0,35) + '..' : webtoon.description}</div>
        </div>
        <div className="rounded-b-2xl text-white text-center flex items-center justify-center text-sm font-semibold" style={{height:"35px", backgroundColor:"#5e5e5e"}} onClick={addWhishList}>찜하기 </div>
      </div>
    </>
   
  )
}