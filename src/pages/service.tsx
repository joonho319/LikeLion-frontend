import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const Service = () =>{
  return (
    <div className="h-screen" >
      <Header />
      <div className="grid grid-cols-10 gap-4">
        <div className="col-start-2 col-span-4 ...">
          <h1 className="font-bold py-24 text-3xl">활용 방법</h1>
          <div className="mt-24">1. 구직자는 입사지원을 합니다. </div>
          <div className="mt-24">2. 입사지원자에게 평판조회 동의서를 구합니다. </div>
          <div className="mt-24">3. 평판조회 신청을 합니다. ( 소요시간은 20분 ~ 3일 정도 소요됩니다.) </div>
          <Link to={'/reference'}><button className="bg-gray-300">지금 평판조회 하러가기</button></Link>
          <div className="mt-24">4. (주)추천서는 전직장으로부터 평판을 요청합니다.</div>
          <div className="mt-24">5. 평판작성이 완료되면 개인프로필에서 입사지원자 관리 탭을 누르고 평판을 조회합니다. </div>
          <Link to={'/sample'}><button className="bg-gray-300">자세한 평판데이터 보러가기</button></Link>
          <div className="mt-24">6. 평판을 고려해 채용을 결정합니다. </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

