import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ReviewCarousel} from '../components/reviewCarousel';
import Main from '../images/main_img.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { UserNotification } from '../components/userNotification'
import { MainHeader } from '../components/mainHeader';
import { VideoCard } from '../components/videoCard';
import { Footer } from '../components/footer';
import { Link } from 'react-router-dom';
import IdeamCurriculum from '../images/boat.gif';
import { LectureCard } from '../components/lectureCard';
import Debate from '../images/main.jpg';
import Reason1 from '../images/reason1.png';
import Reason2 from '../images/reason2.png';

const faqs = [
  {
    question: "어떤 것을 배우나요?",
    answer:
      `기초과정과 정규과정이 다릅니다. 
        기초과정은 자신이 가지고 있는 아이디어를 구체화시키는 모든 활동을 배우게 됩니다. 
        또는 아이디어가 없다면 어떻게 찾을 수 있는지 방법을 배우게 됩니다. 
        
        정규과정은 스타트업을 개설하는 것 부터 국가지원사업, 투자기관등 스타트업에서 
        배우고 실천해야 하는 모든 과정을 배우고, 실천하게 됩니다. 
        지원금을 받는것을 목표로하지않고, 소비자를 만나는 것을 목표로 합니다. 
        한명의 행복한 스타트업 대표를 만드는 것이 목표입니다.`,
  },
  {
    question: "오프라인은 언제 어디서 얼마나 열리나요?",
    answer:
      "오프라인은 광주, 부산, 대전, 대구에서 각 지역마다 최소 한달에 한번씩 모임을 진행합니다. ",
  },
  {
    question: "관리는 어떤식으로 이루어지나요?",
    answer:
      "온라인, 오프라인으로 각각의 분야에 대해 강의와 피드백으로 이루어집니다.",
  },
  {
    question: "사업을 한번도 해보지 못한 사람도 가능한 수업인가요?",
    answer:
      "이 커리큘럼을 잘 따라오고 있는학생 대부분이 처음 사업을 접한 분들입니다.",
  },

  
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}



export const Main2 = () => {
  const [video, setVideo] =  useState<number>(0);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      {/* <UserNotification /> */}
      <MainHeader ismain={true}/>
      <div style={{backgroundImage: `url(${IdeamCurriculum})`, backgroundSize: 'cover', backgroundRepeat:"no-repeat"}} 
              className="relative group"
      >
        <div className="max-w-7xl mx-auto text-indigo-700 pl-6 pt-60 text-3xl GmarketM ">스타트업 돛을 함께 만들어갑시다</div>
        <div className="max-w-7xl mx-auto text-indigo-700 pl-6 pt-8 text-5xl GmarketB" >머리속에 있는 아이디어로 창업을 시작합시다</div>
        <div className="max-w-7xl mx-auto text-indigo-700 pl-6 pt-8 text-xl GmarketL" >남의 이야기라고 생각했던 스타트업을</div>
        <div className="max-w-7xl mx-auto text-indigo-700 pl-6 text-xl GmarketL">두렵기만 했던 나만의 창업을 이제 시작해보세요!</div>
        <div className="max-w-7xl mx-auto text-indigo-700 pl-6 pt-8 pb-60 text-lg ">
          <button className="rounded-full border py-2 px-5 text-lg text-white bg-indigo-600">마스트벤처스 소개</button>
        </div>
      </div>
      <div className="my-52 max-w-7xl mx-auto grid md:grid-cols-5">
        <div className="pl-10 md:col-start-1 md:col-span-3 rounded-lg" style={{backgroundImage: `url(${Debate})`, backgroundSize: 'cover', backgroundRepeat:"no-repeat", height:"360px"}} 
        ></div>
        <div className="px-5 md:col-start-4 md:col-span-2 md:mt-32">
          <div className="text-lg GmarketM">4주 스터디: 매주 토론, 토의</div>
          <div className="text-2xl GmarketB pt-6">아이디어가 머리 속에 있었다면</div>
          <div className="text-2xl GmarketB">이제는 구체화 해봅시다.</div>
          <div className="text-md GmarketM mt-10">누가 틀렸다고 말합니까? 아직 구체적이지 않을 뿐입니다.</div>
          <div className="text-sm GmarketM text-gray-500">틀린 것은 없습니다. 아직 구체적이지 않을 뿐.</div>
          <div className="text-sm GmarketM text-gray-500">머리속에 있는 아이디어를 이제 구체적으로 마들어 봅시다.</div>
        </div>
      </div>
      <p className="mt-52 text-xl GmarketB font-extrabold text-gray-900 tracking-tight sm:text-4xl text-center">
        스타트업 창업 커리큘럼
      </p>
      <p className="text-sm mt-5 GmarketM font-extrabold tracking-tight sm:text-lg text-center mb-10 text-gray-500">
        오전에 배우고 오후에 바로 적용해보세요
      </p>
      <div className="max-w-6xl grid-cols-1 md:grid-cols-2 mx-auto grid lg:grid-cols-3 gap-16 mb-52"> 
        <LectureCard reviewPosts={''} />
        <LectureCard reviewPosts={''} />
        <LectureCard reviewPosts={''} />
      </div>
      <p className="mt-52 text-xl GmarketB font-extrabold tracking-tight sm:text-3xl text-center">마스트벤처스에서</p>
      <p className="text-xl GmarketB font-extrabold tracking-tight sm:text-3xl text-center">시작해야 하는 이유</p>
      <p className="mt-4 text-md GmarketL text-gray-900 tracking-tight sm:text-md text-center">'마음먹으세요. 쉽지만은 않을껍니다.'</p>
      <div className="my-20 max-w-6xl mx-auto grid md:grid-cols-2">
        <div className="pl-20 md:col-span-1 md:mt-20">
          <div className="text-md md:text-2xl GmarketB text-blue-900">하나. 창업을 한번도 해보지 않아도 가능</div>
          <div className="w-5 h-1 bg-gray-500 mt-2 ml-1" ></div>
          <div className="mt-2 text-lg GmarketM">수백번 먹었던 마음은 이제 그만 먹어도 됩니다.</div>
          <div className="text-lg GmarketM">창업부터 고객을 만나는 단계까지</div>
          <div className="text-lg GmarketM">끊임없이 함께 합니다.</div>
        </div>
        <div className="md:col-span-1 grid justify-items-end" style={{backgroundImage: `url(${Reason1})`, backgroundSize: '70% 80%', backgroundRepeat:"no-repeat", height:"360px"}} 
        ></div>
      </div>
      <div className="my-20 max-w-6xl mx-auto grid md:grid-cols-2">
        <div className="ml-20 md:col-span-1 grid justify-items-end" style={{backgroundImage: `url(${Reason2})`, backgroundSize: '85% 80%', backgroundRepeat:"no-repeat", height:"360px"}} 
        ></div>
        <div className=" md:col-span-1 md:mt-20">
          <div className="text-md md:text-2xl GmarketB text-blue-900">둘. 토론, 토의, 발표합니다.</div>
          <div className="w-5 h-1 bg-gray-500 mt-2 ml-1" ></div>
          <div className="mt-2 text-lg GmarketM">매주 배운 내용으로 발표하고</div>
          <div className="text-lg GmarketM">매주 새로운 방식을 토론하고, 토의 합니다.</div>
          <div className="text-lg GmarketM">그렇게 나의 방식을 만듭니다.</div>
        </div>
      </div>
      <div className="my-20 max-w-6xl mx-auto grid md:grid-cols-2">
        <div className="pl-20 md:col-span-1 md:mt-20">
          <div className="text-md md:text-2xl GmarketB text-blue-900">셋. 이론과 실해을 배웁니다.</div>
          <div className="w-5 h-1 bg-gray-500 mt-2 ml-1" ></div>
          <div className="mt-2 text-lg GmarketM">스타트업에서 가장 필요한 것만 배웁니다.</div>
          <div className="text-lg GmarketM">그리고 실행하게 됩니다.</div>
          <div className="text-lg GmarketM">성장과 성취를 맛보게 될 겁니다.</div>
        </div>
        <div className="md:col-span-1 grid justify-items-end" style={{backgroundImage: `url(${Reason1})`, backgroundSize: '70% 80%', backgroundRepeat:"no-repeat", height:"360px"}} 
        ></div>
      </div>
      <div className="my-20 max-w-6xl mx-auto grid md:grid-cols-2">
        <div className="ml-20 md:col-span-1 grid justify-items-end" style={{backgroundImage: `url(${Reason2})`, backgroundSize: '85% 80%', backgroundRepeat:"no-repeat", height:"360px"}} 
        ></div>
        <div className=" md:col-span-1 md:mt-20">
          <div className="text-md md:text-2xl GmarketB text-blue-900">넷. 파트너가 함께 합니다.</div>
          <div className="w-5 h-1 bg-gray-500 mt-2 ml-1" ></div>
          <div className="mt-2 text-lg GmarketM">창업은 외롭기에 혼자 내버려두지 않을겁니다.</div>
          <div className="text-lg GmarketM">파트너가 언제나 함께합니다.</div>
          <div className="text-lg GmarketM">우리는 포기하지 않을겁니다.</div>
          <div className="text-lg GmarketM">당신이 세상을 바꿀 수 있도록.</div>
        </div>
      </div>

      {/* <p className="mt-52  text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl text-center">
        마스트벤처스 미리보기
      </p>
      <div className="grid grid-cols-4 gap-12 mt-24 mb-52 justify-items-stretch md:hidden">
        <div className="col-start-1 col-span-3">
          <VideoCard videoId="s4PNxgvQGFQ?t=464" />
          <VideoCard videoId="obNXXizoLug" />
        </div>
        
      </div>
      <div className="hidden md:overflow-hidden md:grid md:grid-cols-10 md:gap-5 mt-20 md:mb-24 md:justify-items-stretch ">
        <div className="col-start-3 col-span-2">
          <VideoCard videoId="s4PNxgvQGFQ?t=464" />
        </div>
        <div className="col-start-6 col-span-2">
          <VideoCard videoId="obNXXizoLug" />
        </div>
      </div> */}
      
      <ReviewCarousel ismain={true} />
      {/* <div className="h-4/6">
        <p className="mt-20 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl text-center">
          마스트벤처스 커리큘럼
        </p>
        <div className="grid justify-items-center mt-20">
          <button
            type="button"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <a href={'https://drive.google.com/file/d/1qG06_4o5zuxjz1ExL1FaoTLm1mTtAyWh/view?usp=sharing'}
              target="_blank"
            >
              커리큘럼 다운로드
            </a>
          </button>
        </div>
      </div> */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">자주하는 질문들</h2>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              {faqs.map((faq, i) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                          <span className="font-medium text-gray-900">{faq.question}</span>
                          <span className="ml-6 h-7 flex items-center">
                            <ChevronDownIcon
                              className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        {i === 0 ?
                         <p className="text-base text-gray-500">
                            기초과정과 정규과정이 다릅니다. <br />
                            기초과정은 자신이 가지고 있는 아이디어를 구체화시키는 모든 활동을 배우게 됩니다<br />
                            또는 아이디어가 없다면 어떻게 찾을 수 있는지 방법을 배우게 됩니다<br /><br />
                            
                            정규과정은 스타트업을 개설하는 것 부터 국가지원사업, 투자기관등 스타트업에서 <br />
                            배우고 실천해야 하는 모든 과정을 배우고, 실천하게 됩니다<br />
                            지원금을 받는것을 목표로하지않고, 소비자를 만나는 것을 목표로 합니다<br />
                            한명의 행복한 스타트업 대표를 만드는 것이 목표입니다<br />
                          </p> :
                          <p className="text-base text-gray-500">{faq.answer}</p>
                        }
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
