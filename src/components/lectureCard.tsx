import React from 'react';
import { Link } from 'react-router-dom';
import Idea from '../images/idea.jpg';


interface ProgramCardProps {
  reviewPosts: any
}


export const LectureCard:React.FC<ProgramCardProps> = ({reviewPosts}) => {
  return (
    <div key={reviewPosts.id} style={{backgroundImage: `url(${Idea})`, backgroundSize: '100% 40%', backgroundRepeat:"no-repeat", height:"400px"}} 
      className="transform hover:scale-105 p-5 border-indigo-800 bg-white bg-opacity-50 shadow-lg h-96 border-2 rounded-2xl border-transparent border-opacity-5 hover:border-opacity-100"
    >
      <div className="w-full  mt-5 text-white GmarketB text-2xl">1. 아이디어 해킹반</div>
      <div className="w-7/12 mt-3 text-white GmarketM text-lg max-w-lg">머리속에만 있던 걸, 이제는 구체화 해봐요!</div>
      <div className="mt-10 text-black GmarketB text-2xl">"4주간 빡셀껍니다."</div>
      <div className="mt-4 text-black GmarketL text-sm">- 더이상 해볼껄 이라고 말하지 않을껍니다.</div>
      <div className="text-black GmarketL text-sm">- 더이상 별로다 라고 생각하지 않을껍니다.</div>
      <div className="text-black GmarketL text-sm">- 이것이 나의 아이템이라고 당당히 말합시다.</div>
      <div className="grid justify-items-center">
        <button className="mt-10 text-white GmarketM text-sm px-6 py-2 shadow-lg rounded-3xl border bg-indigo-900 justify-center"><Link to={'/program'}>커리큘럼 상세보기</Link></button>
      </div>
    </div>
  )
}