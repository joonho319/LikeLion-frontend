import React from 'react';
import Image from '../images/item.png';
import Logo from '../images/logo.svg'
import { Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const user = {
  name: 'Chelsea Hagon',
  email: 'chelseahagon@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: '온미르몰', href: '#', current: true },
  { name: '광고캠페인', href: '#', current: false },
  { name: '재능몰', href: '#', current: false },
  { name: '포인트', href: '#', current: false },
  { name: '커뮤니티', href: '#', current: false },
  { name: '온미르 센터', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const products = [
  {
    id: 1,
    name: '피츠에이 에너지부스트 단백질 음료',
    color: '파리몰',
    price: 30000,
    discount: 10,
    href: '#',
    commission: 10,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg',
    imageAlt: 'Hand stitched, orange 피츠에이 에너지부스트 단백질 음료.',
  },
  {
    id: 2,
    name: '피츠에이 에너지부스트 단백질 음료',
    color: '파리몰',
    price: 30000,
    discount: 10,
    href: '#',
    commission: 10,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg',
    imageAlt: 'Hand stitched, orange 피츠에이 에너지부스트 단백질 음료.',
  },
  {
    id: 3,
    name: '피츠에이 에너지부스트 단백질 음료',
    color: '파리몰',
    price: 30000,
    discount: 10,
    href: '#',
    commission: 10,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg',
    imageAlt: 'Hand stitched, orange 피츠에이 에너지부스트 단백질 음료.',
  },
  {
    id: 4,
    name: '피츠에이 에너지부스트 단백질 음료',
    color: '파리몰',
    price: 30000,
    discount: 10,
    href: '#',
    commission: 10,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg',
    imageAlt: 'Hand stitched, orange 피츠에이 에너지부스트 단백질 음료.',
  },
  // More products...
]

export const Main3 = () => {
  return (
    <>
      <div className="w-screen mx-auto px-4 sm:px-6 lg:px-8 lg:pt-8">
        <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
          <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-12">
            <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
              <div className="w-full grid justify-items-center">
                <img
                  className="block h-14 w-auto"
                  src={Logo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-items-center pl-96 mt-12">
        {navigation.map((item)=> (
          <a className="inline-block ml-28">
            {item.name}
          </a>
        ))}
      </div>
      <div className="mt-4 pt-20 h-96 bg-yellow-400 text-center text-3xl text-blue-600">
        <>세상의 모든 상품을 사고 팔 수 있어요!</>
        <div className="text-black text-lg mt-1">그냥 쇼핑해도, 공유해서 판매해도 수익이 쌓입니다.</div>
      </div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="md:flex md:items-center md:justify-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">오늘 홍보하기 좋은 상품</h2>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative border-2 border-gray-100 border-opacity-90 rounded-md shadow-lg ">
                <div className="w-full h-56 rounded-md overflow-hidden group-hover:opacity-75 lg:h-52 xl:h-60 p-4">
                  <img
                    src={Image}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover rounded-md"
                  />
                </div>
                <p className="mt-1 text-sm text-gray-500 ml-4">{product.color}</p>
                <h3 className="mt-1 text-md font-normal text-gray-700 ml-4">
                  <a href={product.href}>
                    <span className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <span className="mt-1 text-xs font-medium text-red-500 mr-1 pl-4">{product.discount}%</span>
                <span className="mt-1 text-xs font-medium text-gray-400 mr-1 line-through">{product.price}원 </span>
                <span className="mt-1 text-sm font-medium text-gray-900">{ product.price * (100 -product.discount)/100}원</span>
                <div className="mt-3 text-sm font-medium rounded-b-md text-gray-900 bg-gray-200 text-center p-1">판매금액의 {product.commission}%</div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-sm md:hidden">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              더 보러가기<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="md:flex md:items-center md:justify-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">한방을 원한다면!</h2>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative border-2 border-gray-100 border-opacity-90 rounded-md shadow-lg ">
                <div className="w-full h-56 rounded-md overflow-hidden group-hover:opacity-75 lg:h-52 xl:h-60 p-4">
                  <img
                    src={Image}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover rounded-md"
                  />
                </div>
                <p className="mt-1 text-sm text-gray-500 ml-4">{product.color}</p>
                <h3 className="mt-1 text-md font-normal text-gray-700 ml-4">
                  <a href={product.href}>
                    <span className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <span className="mt-1 text-xs font-medium text-red-500 mr-1 pl-4">{product.discount}%</span>
                <span className="mt-1 text-xs font-medium text-gray-400 mr-1 line-through">{product.price}원 </span>
                <span className="mt-1 text-sm font-medium text-gray-900">{ product.price * (100 -product.discount)/100}원</span>
                <div className="mt-3 text-sm font-medium rounded-b-md text-gray-900 bg-gray-200 text-center p-1">판매금액의 {product.commission}%</div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-sm md:hidden">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              더 보러가기<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="md:flex md:items-center md:justify-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">온미르에서 제일 잘나가는 상품은?</h2>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative border-2 border-gray-100 border-opacity-90 rounded-md shadow-lg ">
                <div className="w-full h-56 rounded-md overflow-hidden group-hover:opacity-75 lg:h-52 xl:h-60 p-4">
                  <img
                    src={Image}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover rounded-md"
                  />
                </div>
                <p className="mt-1 text-sm text-gray-500 ml-4">{product.color}</p>
                <h3 className="mt-1 text-md font-normal text-gray-700 ml-4">
                  <a href={product.href}>
                    <span className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <span className="mt-1 text-xs font-medium text-red-500 mr-1 pl-4">{product.discount}%</span>
                <span className="mt-1 text-xs font-medium text-gray-400 mr-1 line-through">{product.price}원 </span>
                <span className="mt-1 text-sm font-medium text-gray-900">{ product.price * (100 -product.discount)/100}원</span>
                <div className="mt-3 text-sm font-medium rounded-b-md text-gray-900 bg-gray-200 text-center p-1">판매금액의 {product.commission}%</div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-sm md:hidden">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              더 보러가기<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
