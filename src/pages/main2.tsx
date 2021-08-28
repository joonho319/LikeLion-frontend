import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ReviewCarousel} from '../components/reviewCarousel';
import Main from '../images/main_img.jpg';
import Image from '../images/item.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { UserNotification } from '../components/userNotification'
import { MainHeader } from '../components/mainHeader';
import { VideoCard } from '../components/videoCard';
import { Footer } from '../components/footer';

const faqs = [
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


export const blogPosts = [
  {
    id: 1,
    title: '만족했던 멘토링이었습니다.',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { name: '아이디어 검증', href: '#' },
    preview:
      '후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기',
    author: {
      name: '(주)백프로 주성환 대표',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
  },
  {
    id: 2,
    title: '만족했던 멘토링이었습니다.',
    href: '#',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    category: { name: '사업화 전략', href: '#' },
    preview:
      '후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기',
    author: {
      name: '(주)백프로 주성환 대표',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
  },
  {
    id: 3,
    title: '만족했던 멘토링이었습니다.',
    href: '#',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { name: '마케팅', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      '후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기',
    author: {
      name: '(주)백프로 주성환 대표',
    },
  },
  {
    id: 3,
    title: '너무 만족했던 멘토링이었습니다.',
    href: '#',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { name: '사업계획서 작성', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      '후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기',
    author: {
      name: '(주)백프로 주성환 대표',
    },
  },
  {
    id: 3,
    title: '너무 만족했던 멘토링이었습니다.',
    href: '#',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { name: '사업계획서 작성', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      '후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기',
    author: {
      name: '(주)백프로 주성환 대표',
    },
  },
  {
    id: 3,
    title: '너무 만족했던 멘토링이었습니다.',
    href: '#',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { name: '사업계획서 작성', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      '후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기',
    author: {
      name: '(주)백프로 주성환 대표',
    },
  },
  {
    id: 3,
    title: '너무 만족했던 멘토링이었습니다.',
    href: '#',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { name: '사업계획서 작성', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      '후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기',
    author: {
      name: '(주)백프로 주성환 대표',
    },
  },
  {
    id: 3,
    title: '너무 만족했던 멘토링이었습니다.',
    href: '#',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { name: '사업계획서 작성', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      '후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기',
    author: {
      name: '(주)백프로 주성환 대표',
    },
  },
  {
    id: 3,
    title: '너무 만족했던 멘토링이었습니다.',
    href: '#',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { name: '사업계획서 작성', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      '후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기',
    author: {
      name: '(주)백프로 주성환 대표',
    },
  },
  {
    id: 3,
    title: '너무 만족했던 멘토링이었습니다.',
    href: '#',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { name: '아이디어 발견', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      '후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기',
    author: {
      name: '(주)백프로 주성환 대표',
    },
  },
]

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
        마스트벤처스는 어떤 곳인가요?
      </p>
      <div className="grid grid-cols-4 gap-12 mt-20 mb-10 justify-items-stretch md:hidden">
        <div className="col-start-1 col-span-3">
          <VideoCard videoId="mfAHjp9I_o8" />
        </div>
      </div>
      <div className="hidden md:overflow-hidden md:grid md:grid-cols-4 md:gap-12 mt-20 md:mb-10 md:justify-items-stretch">
        <div className="col-start-2 col-span-3">
          {/* <button
            type="button"
            className="bg-indigo-600 text-white p-2 w-32 rounded-md"
          >
            김기현 대표
          </button>
          <button
            type="button"
            className="bg-indigo-600 text-white p-2 w-32 rounded-md"
          >
            신태순 대표
          </button>
          <button
            type="button"
            className="bg-indigo-600 text-white p-2 w-32 rounded-md"
          >
            이원엽 대표
          </button>
          <button
            type="button"
            className="bg-indigo-600 text-white p-2 w-32 rounded-md"
          >
            제준호 대표
          </button> */}
          <VideoCard videoId="mfAHjp9I_o8" />
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
      
      <ReviewCarousel reviewPosts={blogPosts} showTitle={true} />
      <p className="mt-20 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl text-center">
        마스트벤처스 커리큘럼
      </p>
      <div className="grid justify-items-center mt-20">
        <button
          type="button"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          커리큘럼 다운로드
        </button>
      </div>
      <div className="bg-gray-50 mt-20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">자주하는 질문들</h2>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              {faqs.map((faq) => (
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
                        <p className="text-base text-gray-500">{faq.answer}</p>
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
