import { useReactiveVar } from '@apollo/client';
import React, { useEffect, useState } from "react";
import { Header2 } from '../components/header2';
import Itemselect from '../images/사업아이템선정.png';
import paidItems from '../images/refer_main.jpg';

import { free_or_paid } from '../apollo';

const free_products = [
  {
    id: 1,
    name: '1단계: 어떻게 사업 아이템을 선정해야 할까?',
    href: '#',
    imageSrc: '사업아이템선정',
    imageAlt: '사업아이템',
  },
  {
    id: 2,
    name: '2단계: 어떻게 사업 아이템을 선정해야 할까?',
    href: '#',
    imageSrc: '사업아이템선정',
    imageAlt: '사업아이템',
  },
  {
    id: 3,
    name: '3단계: 어떻게 사업 아이템을 선정해야 할까?',
    href: '#',
    imageSrc: '사업아이템선정',
    imageAlt: '사업아이템',
  },
  {
    id: 4,
    name: '4단계: 어떻게 사업 아이템을 선정해야 할까?',
    href: '#',
    imageSrc: '사업아이템선정',
    imageAlt: '사업아이템',
  },
]

const paid_products = [
  {
    id: 1,
    name: '1단계: 투자를 어떻게 받아야할까?',
    href: '#',
    imageSrc: '사업아이템선정',
    imageAlt: '사업아이템',
  },
  {
    id: 2,
    name: '2단계: 투자를 어떻게 받아야할까?',
    href: '#',
    imageSrc: '사업아이템선정',
    imageAlt: '사업아이템',
  },
  {
    id: 3,
    name: '3단계: 투자를 어떻게 받아야할까?',
    href: '#',
    imageSrc: '사업아이템선정',
    imageAlt: '사업아이템',
  },
  {
    id: 4,
    name: '4단계: 투자를 어떻게 받아야할까?',
    href: '#',
    imageSrc: '사업아이템선정',
    imageAlt: '사업아이템',
  },
]

export const Online = () => {
  const isLoggedIn = useReactiveVar(free_or_paid);
  const [isFree, setIsFree] = useState<boolean>(false);

  return (
    <>
      <Header2 />
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="sm:flex sm:justify-center">
            <button onClick={() => setIsFree(true)}><h2 className="text-2xl font-extrabold tracking-tight text-gray-900">무료 강의</h2></button>
            <button onClick={() => setIsFree(false)}><h2 className="text-2xl font-extrabold tracking-tight text-gray-900 ml-20">유료 강의</h2></button>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 md:gap-y-0 lg:gap-x-8">
            
            {isFree ? free_products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full h-56 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80">
                  <img
                    src={Itemselect}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-fill"
                  />
              </div>
                <h3 className="mt-4 text-sm text-gray-700">
                  <a href={product.href}>
                    <span className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
              </div>
            )) :
            paid_products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full h-56 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80">
                  <img
                    src={paidItems}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-fill"
                  />
              </div>
                <h3 className="mt-4 text-sm text-gray-700">
                  <a href={product.href}>
                    <span className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
              </div>
            ))
          }
          </div>
        </div>
      </div>  
    </>
  )
}
