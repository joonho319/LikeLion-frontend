import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

interface ReviewCardProps {
  reviewPosts: any[];
  showTitle: boolean;
}

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}


export const mainReviewCarousel: React.FC<ReviewCardProps> = ({reviewPosts, showTitle}) => {

  const style = {
    backgroundColor: showTitle ? "#1f2937" : "#eeeeee"
  }
  return (
      <div className={classNames( showTitle ? 'bg-white mt-10' : '', '')}> 
        <div className={classNames( showTitle ? 'py-16 lg:py-32 sm:py-24' : '', 'relative')} style={style}>
          <div className="relative">
            {showTitle ?
              <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <p className="mt-2 text-3xl font-bold text-white text-opacity-70 tracking-tight sm:text-4xl">
                멘토링을 직접 받은 회사대표님들이 직접 써주신 후기글
                </p>
                <p className="mt-5 mx-auto max-w-prose text-xl text-white text-opacity-80">
                  멘토링을 직접 받은 회사대표님들이 직접 써주신 후기글
                </p>
              </div> :
              <div className="max-w-7xl mx-auto px-4 sm:py-16 sm:px-6 lg:px-8">
                <select
                  id="country"
                  name="country"
                  autoComplete="country"
                  className="pl-3 pr-10 py-2 max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                >
                  <option>아이디어</option>
                  <option>사업계획서</option>
                  <option>마케팅전략</option>
                  <option>비즈니스모델</option>
                  <option>사업화전략</option>
                  <option>투자전략</option>
                </select>  
              </div>
            }
          
          <div className={classNames( showTitle ? 'mt-12' : '', 'mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-4 lg:max-w-7xl transition ease-in-out transform hover:-translate-y-1 hover:scale-125')}>
            {reviewPosts.filter((v,i) => (i < 4)).map((post,i ) => (
              <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-cyan-600">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{(post.preview.length > 110) ? post.preview.substring(0,100) + '..' : post.preview}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={post.author.href} className="hover:underline">
                          {post.author.name}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {showTitle ?
            <div className="grid justify-items-center mt-20">
              <Link to={'review'}>
              <button
                type="button"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                후기 더보러 가기
              </button>
              </Link>
            </div> :
            <div className=" h-16"></div>
          }
        </div>
      </div>
  )
}