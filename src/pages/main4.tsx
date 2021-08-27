
import React from 'react';
import { Header2 } from '../components/header2';
import { ItemCard } from '../components/itemCard';


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

export const Main4 = () => {
  return (
    <>
      <Header2  page={'main4'}/>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="md:flex md:items-center md:justify-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">한방을 원한다면!</h2>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            {products.map((product) => (
              <ItemCard 
                src={product.imageSrc}
                color={product.color}
                href={product.href}
                name={product.name}
                discount={product.discount}
                price={product.price}
                commission={product.commission}
                is_commission={true}
              />
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