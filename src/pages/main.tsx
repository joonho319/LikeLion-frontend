import React from 'react';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import mainImage from '../images/main_img.jpg';


export const Main = () =>{
  const scroll = Scroll.animateScroll;
  const scroller = Scroll.scroller;
  const Element = Scroll.Element;

const scrolltoSerVice = () => {
  scroller.scrollTo('service', {
    smooth: true,
  });
}

  return (
    <div className="h-screen" style={{backgroundImage: `url(${mainImage})` }} >
      <Header />
        <div className="pt-20 pl-40 h-screen">
          <div className="text-white text-2xl pt-3 pl-3 font-sans">직원이 회사를 평가하는 사이트는 있는데..</div>
          <div className="text-white text-2xl pt-3 pl-3 font-sans">왜 회사가 직원을 평가하는 곳은 없을까요?</div>
          <div className="text-white text-3xl pt-7 pl-3 font-sans">이 곳은 철저하게 대표를 위한 사이트입니다.</div>
          <div className="text-white text-3xl pl-3 font-sans pt-16"></div>
          <div className="">
            <a>
              <button onClick={scrolltoSerVice} className="px-8 py-3 border border-gray-400 font-medium rounded-md text-white bg-transparent hover:bg-gray-700 md:py-4 md:text-lg md:px-10">서비스 소개 보러가기</button>
            </a>
          </div>
        </div>
      <div>
        <div className="h-auto">
          <Element name="service"></Element>
          <div className="grid justify-items-center text-2xl pt-20 ">서비스 소개</div> 
          <div className="grid justify-items-center pt-24">회사의 모든 직원들이 한명도 빠짐없이 다 마음에 든다면 이 곳을 나가셔도 좋습니다.</div>
          <div className="grid justify-items-center">정말 믿고 뽑았는데, 내가 생각했던 직원이 아닌 적 있다면 왜 그럴까요? </div>
          <div className="grid justify-items-center">자기소개서, 이력서, 면접때의 주장은 자신의 주장이지, 사실과는 다를 수 있습니다.</div>
          <div className="grid justify-items-center mb-44">저희 추천서는 입사지원자의 실제 모습, 실제 능력을 객관적으로 평가된 데이터를 전달해드리는 평판조회 서비스입니다.</div>
        </div>
        <div className="h-auto bg-gray-100 pb-40">
          <div className="grid justify-items-center pt-16">이 서비스는 이런 경우를 방지합니다.</div> 
          <div className="grid grid-flow-col grid-cols-3 gap-4 pt-32 ">
            <div className="grid justify-items-center">1. 성실한 줄 알았는데 퇴근만 바라보고 시간만 떼우더라고요. </div>
            <div className="grid justify-items-center">2. 직원이 갑자기 퇴사 통보를 하면 그 직원이 하던 일은 당장 누가 하죠? </div>
            <div className="grid justify-items-center">3. 이력서가 화려해서 뽑았는데, 기대했던 실력이 아니에요.  </div>
          </div>
        </div>
        <div className="h-auto mb-44">
          <div className="grid justify-items-center pt-16">이런 데이터라면 믿을 수 있으시겠어요?</div> 
          <div className="grid justify-items-center pt-32">인포그래픽을 통해 우리가 보여줄 수 있는 간략한 데이터</div>
          <Link to={'/sample'} className="grid justify-items-center pt-8">
            <button className="text-md p-2 ml-3 border-2 rounded-3xl bg-transparent text-black hover:bg-blue-500">더 자세한 내용 보러가기</button>
          </Link>
        </div>
        <div className="h-96 bg-gray-100 ">
          <div className="grid justify-items-center pt-16">대표님들의 사례</div> 
        </div>
      </div>
      <Footer />
    </div>
  )
}

