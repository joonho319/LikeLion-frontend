import { Link, useHistory } from "react-router-dom"
import { Header2 } from "../components/header2"
import IdeamCurriculum from '../images/ideaprocess-001.png';
import RegularCurriculum from '../images/regularprocess-001.png';
import BusinessPlan from '../images/business_plan-001.png';
import styled from "styled-components";
import { Footer } from "../components/footer";
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
  const history = useHistory();
  const goToApplyPage = (page: any) => {
    history.push(page);
  }
  return (
    <>
      <Header2 page={'program'} />
      <div>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid justify-items-center">
            <h2 className="text-4xl font-bold text-gray-900">프로그램 과정</h2>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 ">
            <div  key={products[0].id} style={{backgroundImage: `url(${IdeamCurriculum})`, backgroundSize: '100% 100%', backgroundRepeat:"no-repeat", height:"360px"}} 
              className="relative group transform hover:scale-105 border-4 border-indigo-500 rounded-lg border-opacity-0 hover:border-opacity-100"
              onClick={() => goToApplyPage('/program/apply')}  
            >
            </div>
            <div key={products[1].id} style={{backgroundImage: `url(${BusinessPlan})`, backgroundSize: '100% 100%', backgroundRepeat:"no-repeat"}} 
              className="transform hover:scale-105 border-4 border-indigo-500 rounded-lg border-opacity-0 hover:border-opacity-100 hover:bg-black"
            >
            </div>
            <div style={{backgroundImage: `url(${RegularCurriculum})`, backgroundSize: '100% 100%', backgroundRepeat:"no-repeat"}} 
              key={products[2].id} className="transform hover:scale-105 border-4 border-indigo-500 rounded-lg border-opacity-0 hover:border-opacity-100">
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
