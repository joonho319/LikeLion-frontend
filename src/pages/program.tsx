import { Link } from "react-router-dom"
import { Header2 } from "../components/header2"
import IdeamCurriculum from '../images/idea_curriculum.png';
import RegularCurriculum from '../images/regular_curriculum2.png';
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
  // More products...
]

export const Program = () => {
  return (
    <>
      <Header2 page={'program'} />
      <div>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid justify-items-center">
            <h2 className="text-4xl font-bold text-gray-900">프로그램 과정</h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-2">
            <div key={products[0].id} className="relative group">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                <Link to={products[0].href}>
                  <img src={IdeamCurriculum} alt={products[0].imageAlt} className="object-center object-cover" />
                  {/* <span className="bg-blue-400 w-auto mt-2 " >모집중</span> */}
                </Link>
              </div>
            </div>
            <div key={products[1].id} className="relative group">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                <img src={RegularCurriculum} alt={products[1].imageAlt} className="object-center object-cover opacity-30 " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
