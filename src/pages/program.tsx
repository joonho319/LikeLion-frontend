import { Link } from "react-router-dom"
import { Header2 } from "../components/header2"
import IdeamCurriculum from '../images/ideaprocess-001.png';
import RegularCurriculum from '../images/regularprocess-001.png';
import BusinessPlan from '../images/business_plan-001.png';
import styled from "styled-components";
/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: 'Fusion',
    category: 'UI Kit',
    href: '/program/apply',
    price: '$49',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg',
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  },
  {
    id: 1,
    name: 'Fusion',
    category: 'UI Kit',
    href: '',
    price: '$49',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg',
    imageAlt:
      '정규과정',
  },
  {
    id: 1,
    name: 'Fusion',
    category: 'UI Kit',
    href: '',
    price: '$49',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg',
    imageAlt:
      '정규과정',
  },
  // More products...
];

const Image = styled.img`
  &:hover: {
    -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }
`;

export const Program = () => {
  return (
    <>
      <Header2 page={'program'} />
      <div>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid justify-items-center">
            <h2 className="text-4xl font-bold text-gray-900">프로그램 과정</h2>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div key={products[0].id} className="relative group">
              <button className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden " >
                <Link to={products[0].href} className="hover:text-indigo-800">
                  <Image src={IdeamCurriculum} alt={products[0].imageAlt} className="object-center object-cover hover:opacity-75" />
                  <button className="font-bold">[모집중] 아이디어 선정 과정</button>
                </Link>
              </button>
            </div>
            <div key={products[1].id} className="relative group hover:opacity-100">
              <button className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden cursor-not-allowed hover:bg-black">
                  <img src={BusinessPlan} alt={products[1].imageAlt} className="object-center object-cover opacity-60 " />
                  <button>[모집예정] 사업계획서 작성 과정 </button>
              </button>
              
            </div>
            <div key={products[1].id} className="relative group">
              <button className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden cursor-not-allowed hover:bg-black">
                <img src={RegularCurriculum} alt={products[1].imageAlt} className="object-center object-cover opacity-60 " />
                <button >[모집예정] 스타트업 정규 과정</button>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
