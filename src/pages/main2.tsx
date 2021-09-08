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
      <UserNotification />
      <MainHeader />
      <p className="mt-10 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl text-center">
        마스트벤처스 미리보기
      </p>
      <div className="grid grid-cols-4 gap-12 mt-20 mb-10 justify-items-stretch md:hidden">
        <div className="col-start-1 col-span-3">
          <VideoCard videoId="s4PNxgvQGFQ?t=463" />
          <VideoCard videoId="obNXXizoLug" />
        </div>
        
      </div>
      <div className="hidden md:overflow-hidden md:grid md:grid-cols-10 md:gap-5 mt-20 md:mb-24 md:justify-items-stretch ">
        <div className="col-start-3 col-span-2">
          <VideoCard videoId="s4PNxgvQGFQ?t=463" />
        </div>
        <div className="col-start-6 col-span-2">
          <VideoCard videoId="obNXXizoLug" />
        </div>
      </div>
      {/* <div className="mt-10">
        <Carousel
          showArrows={true}
          showStatus={false}
          showIndicators={true}
          infiniteLoop={true}
          showThumbs={false}
          width="50%"
        >
          <div>
            <VideoCard videoId="mfAHjp9I_o8" />
          </div>
          <div>
            <VideoCard videoId="mfAHjp9I_o8" />
          </div>
          <div>
            <VideoCard videoId="mfAHjp9I_o8" />
          </div>
        </Carousel>
      </div> */}
      
      <ReviewCarousel ismain={true} />
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
      <div className="bg-gray-50 mt-20">
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
