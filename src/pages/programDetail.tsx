import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { MainHeader } from '../components/mainHeader';
import { Footer } from '../components/footer';
import { Link } from 'react-router-dom';
import Debate from '../images/main.jpg';
import { ReviewCard } from '../components/reviewCard';
import { Switch } from '@headlessui/react'


function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}



export const ProgramDetail = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <>
      {/* <UserNotification /> */}
      <MainHeader ismain={false}/>
      <div className="mt-40 max-w-7xl mx-auto grid md:grid-cols-5">
        <div className="px-5 md:col-span-2 md:mt-12">
          <div className="text-5xl GmarketB">아이디어 해킹반</div>
          <div className="text-lg GmarketL pt-12">아이디어는 머리속에만 존재해서는 안됩니다.</div>
          <div className="text-lg GmarketL">아이디어가 세상에 나올 수 있도록</div>
          <div className="text-lg GmarketL">배우고, 발표하고, 토론하고, 작성할겁니다.</div>
          <div className="text-lg GmarketL">더 이상 잊어버리지 않도록</div>
          <button className="mt-7 text-white GmarketM text-sm px-6 py-3 shadow-lg rounded-3xl border bg-indigo-900 justify-center"><Link to={'/program/idea/apply'}>수강신청 하러가기</Link></button>
        </div>
        <div className="pl-10 md:col-span-3 rounded-lg" style={{backgroundImage: `url(${Debate})`, backgroundSize: 'cover', backgroundRepeat:"no-repeat", height:"370px"}}></div>
      </div>
      <div style={{backgroundColor: "#313131"}} className="w-screen h-40 mt-16 text-center text-white GmarketM text-3xl">
        <div className="pt-16">
          <span className="px-2 py-4 bg-indigo-900 mr-3">4주간</span> 
          <span>배우고 </span>
          <span className="ml-10 px-2 py-4 bg-indigo-900 mr-3">4주간</span> 
          <span className="mr-10">발표하고</span> 
          <span className="px-2 py-4 bg-indigo-900 mr-3">4주간</span> 
          <span>토론합니다.</span>
        </div>
      </div>
      <p className="mt-52 pl-5 text-xl GmarketB font-extrabold tracking-tight sm:text-4xl max-w-4xl mx-auto">우리는 이렇게 배울거에요!</p>
      <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-12">
        <div className="md:col-span-1 grid justify-end">
          <div className="border-4 border-indigo-900 md:text-2xl rounded-full w-14 h-14 flex items-center justify-center text-indigo-900 GmarketM">4주</div>
        </div>
        <div className=" md:col-span-11 rounded-lg ml-4 GmarketM md:text-xl ">
          <p className="mt-3 text-indigo-900 md:text-2xl">오전에는 이렇게 배워요.</p>
        </div>
        
      </div>
      <div className="max-w-4xl mx-auto grid sm:grid-cols-12">
        <div className="sm:col-span-1 grid justify-end">
          <div className="grid justify-center pr-7">
            <div className="w-1 h-80 bg-indigo-900"></div>
          </div>
        </div>
        <div className=" sm:col-span-11 rounded-lg ml-4 GmarketM sm:text-xl ">
          <p className="mt-5 ">1. 아이디어를 찾는 방법(PBNW)을 배우게 됩니다.</p>
          <p className="mt-2 ">2. 방법이 이해될 수 있도록 다양한 사례와 예시를 전달합니다.</p>
          <p className="mt-2 ">3. 사례와 예시를 스스로 찾아봅니다.</p>
          <p className="mt-2 ">4. 도전하는 마음이 흔들이지 않도록 기업가정신을 익힙니다. </p>
          <p className="mt-2 ">5. 간단한 툴 사용으로 아이디어를 이미지화 합니다. </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto grid sm:grid-cols-12">
        <div className="sm:col-span-1 grid justify-end">
          <div className="border-4 border-indigo-900 sm:text-2xl rounded-full w-14 h-14 flex items-center justify-center text-indigo-900 GmarketM">4주</div>
        </div>
        <div className=" sm:col-span-11 rounded-lg ml-4 GmarketM md:text-xl ">
          <p className="mt-3 text-indigo-900 md:text-2xl">오후에는 토론합니다.</p>
          <p className="mt-5 ">1. 3분간 자기소개를 합니다.</p>
          <p className="mt-2 ">2. 오전에 내준 숙제에 대한 사례를 찾아보고 발표합니다.</p>
          <p className="mt-2 ">3. 타인의 의견에 살을 붙이고, 토론합니다.</p>
          <p className="mt-2 ">4. 자신의 아이디어를 발표하고, 토론합니다. </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <p className="mt-52 mb-20 text-xl GmarketB font-extrabold text-gray-900 tracking-tight sm:text-4xl text-center">
          우리는 이런 분을 찾습니다.
        </p>
        <div className="max-w-3xl mx-auto md:text-xl GmarketM">
          <div className="mt-5 p-4 text-center rounded-lg bg-gray-300 ">1. 아이디어가 실제로 가능할까? 라고 생각하는 분 </div>
          <div className="mt-5 p-4 text-center rounded-lg bg-gray-300 ">2. 내 아이디어는 너무 대단해서 절대로 발설하면 안된다고 생각하는 분 </div>
          <div className="mt-5 p-4 text-center rounded-lg bg-gray-300 ">3. 아직 실행하기에 너무 두려운 분 </div>
          <div className="mt-5 p-4 text-center rounded-lg bg-gray-300 ">4. 아이디어로 세상을 바꿀 분 </div>
        </div>
        <div className="text-xl GmarketB font-extrabold text-gray-900 tracking-tight sm:text-4xl text-center my-64">
          <p className="mt-5 ">창업을 해보지 않았어도</p>
          <p className="mt-5 ">나이가 어려도</p>
          <p className="mt-5 ">나이가 많아도</p>
          <p className="mt-5 ">성별도</p>
          <p className="mt-5 ">세상을 바꾸는데 아무런 문제가 없습니다.</p>
        </div>
      </div>
      <div className="bg-gray-200 h-auto">
        <p className="mt-68 pt-20 text-xl GmarketB font-extrabold text-gray-900 tracking-tight sm:text-3xl text-center">
          마스트벤처스와 함께한 대표들의 이야기
        </p>
        <ReviewCard filter={'idea'} />
      </div>
      
      <div className="max-w-4xl mx-auto mb-24">
        <p className="mt-52 text-xl GmarketB font-extrabold text-gray-900 tracking-tight sm:text-4xl text-center">상세 커리큘럼</p>
        <p className="mt-5 text-xl text-gray-800 tracking-tight sm:text-xl text-center">
          매주 화요일 오전 10 ~ 12시 강의 / 오후 9 ~ 12시 발표 및 결판 토론
        </p>
        <p className="mt-16 text-xl GmarketB font-extrabold text-gray-800 tracking-tight sm:text-xl text-center flex item-center justify-center">
          <span className="mr-2">오전</span>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={classNames(
              enabled ? 'bg-indigo-600' : 'bg-indigo-600',
              'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            )}
          >
            <span
              aria-hidden="true"
              className={classNames(
                enabled ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
              )}
            />
          </Switch>
          <span className="ml-2">오후</span>
        </p>
        { enabled ?
          <div>
            <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-12">
              <div className="md:col-span-2 grid justify-end">
                <span className=" border-2 border-indigo-900 md:text-lg rounded-full w-10 h-10 flex items-center justify-center text-black GmarketM">0주</span>
              </div>
              <div className="md:col-span-10 ml-10 mt-1  text-black md:text-2xl">창업가의 기본기 익히기</div>
            </div>
              
            <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-12">
              <div className="md:col-span-2 grid justify-end">
                <span className=" border-2 border-indigo-900 md:text-lg rounded-full w-10 h-10 flex items-center justify-center text-black GmarketM">1주</span>
              </div>
              <div className="md:col-span-10 ml-10 mt-1  text-black md:text-2xl">자기소개를 통한 자기 주장하기</div>
            </div>
            <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-12">
              <div className="md:col-span-2 grid justify-end">
                <span className=" border-2 border-indigo-900 md:text-lg rounded-full w-10 h-10 flex items-center justify-center text-black GmarketM">2주</span>
              </div>
              <div className="md:col-span-10 ml-10 mt-1  text-black md:text-2xl">P 숙제 발표 / 아이디어 발표</div>
            </div>
            <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-12">
              <div className="md:col-span-2 grid justify-end">
                <span className=" border-2 border-indigo-900 md:text-lg rounded-full w-10 h-10 flex items-center justify-center text-black GmarketM">3주</span>
              </div>
              <div className="md:col-span-10 ml-10 mt-1  text-black md:text-2xl">B 숙제 발표 / 아이디어 발표</div>
            </div>
            <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-12">
              <div className="md:col-span-2 grid justify-end">
                <span className=" border-2 border-indigo-900 md:text-lg rounded-full w-10 h-10 flex items-center justify-center text-black GmarketM">4주</span>
              </div>
              <div className="md:col-span-10 ml-10 mt-1  text-black md:text-2xl">NW 숙제 발표 / 최종 정리</div>
            </div>
          </div> :
          <div>
            <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-12">
              <div className="md:col-span-2 grid justify-end">
                <span className=" border-2 border-indigo-900 md:text-lg rounded-full w-10 h-10 flex items-center justify-center text-black GmarketM">0주</span>
              </div>
              <div className="md:col-span-10 ml-10 mt-1  text-black md:text-2xl">마음의 준비는 필수! 당신이 이기거나 당신이 세상을 바꾸면 됩니다.</div>
            </div>
            <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-12">
              <div className="md:col-span-2 grid justify-end">
                <span className=" border-2 border-indigo-900 md:text-lg rounded-full w-10 h-10 flex items-center justify-center text-black GmarketM">1주</span>
              </div>
              <div className="md:col-span-10 ml-10 mt-1  text-black md:text-2xl">아이디어 찾는법 ( 문제의핵심, PBNW) /   기업가정신 /   숙제</div>
            </div>
            <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-12">
              <div className="md:col-span-2 grid justify-end">
                <span className=" border-2 border-indigo-900 md:text-lg rounded-full w-10 h-10 flex items-center justify-center text-black GmarketM">2주</span>
              </div>
              <div className="md:col-span-10 ml-10 mt-1  text-black md:text-2xl">P를 통하여 찾는법 /   글로써 정리하기( 홈페이지, 블로그) /   숙제</div>
            </div>
            <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-12">
              <div className="md:col-span-2 grid justify-end">
                <span className=" border-2 border-indigo-900 md:text-lg rounded-full w-10 h-10 flex items-center justify-center text-black GmarketM">3주</span>
              </div>
              <div className="md:col-span-10 ml-10 mt-1  text-black md:text-2xl">B로 부터 출발하기 /   이미지로 만들어보기( 블로그, PPT) /  숙제</div>
            </div>
            <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-12">
              <div className="md:col-span-2 grid justify-end">
                <span className=" border-2 border-indigo-900 md:text-lg rounded-full w-10 h-10 flex items-center justify-center text-black GmarketM">4주</span>
              </div>
              <div className="md:col-span-10 ml-10 mt-1  text-black md:text-2xl">NW로 발견하기 / 기본 툴 정리</div>
            </div>
          </div> 
        }
        
        
      </div>
      <Footer />
    </>
  )
}
