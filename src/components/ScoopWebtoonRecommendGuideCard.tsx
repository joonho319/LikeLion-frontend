import React, { useState } from 'react';

import Webtoon from '../images/독립일기.png';

interface WebtoonCardProps {
  webtoon: any
}

export const ScoopWebtoonRecommendGuideCard: React.FC<WebtoonCardProps> = ({
  webtoon
}) => {
  return (
    <div>
      <div className="border rounded-xl p-3 w-11/12 mx-auto shadow-md mt-3 mb-5">
        <div>
          <div className="bg-cover rounded-xl w-full bg-gray-400 flex flex-col-reverse" style={{height:"270px"}}>
            <div className="">
              <div className="bg-green-400 rounded-b-xl text-white text-center flex items-center justify-center text-sm font-semibold" style={{height:"32px"}}>웹툰 보러 가기 </div>
            </div>
          </div>
        </div>
        <div className="grid justify-center font-bold text-2xl mt-3"  >스쿱 게임</div>
        <div className="grid justify-center text-gray-700 text-base mx-auto w-2/3 mt-3">10개 웹툰을 평가하면,</div>
        <div className="grid justify-center text-gray-700 text-base mx-auto w-2/3 ">내게 맞는 웹툰을 찾아드려요.</div>
      </div>
      <div className="grid grid-cols-4 gap-1 px-10">
        <div className="grid justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" /></svg>
          새로고침
        </div>
        <div className="grid justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          안봤어요
        </div>
        <div className="grid justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          봤어요
        </div>
        <div className="grid justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
          볼래요
        </div>
      </div>
    </div>
   
  )
}