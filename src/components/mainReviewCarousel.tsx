import { useQuery } from '@apollo/client';
import { StarIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { getReview } from '../__generated__/getReview';
import { area, GET_REVIEW_QUERY } from './reviewCarousel';

interface ReviewCardProps {
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


export const MainReviewCarousel: React.FC<ReviewCardProps> = ({showTitle}) => {
  const { data } = useQuery<getReview>(GET_REVIEW_QUERY);
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
                Program Epilogue
                </p>
                <p className="mt-5 mx-auto max-w-prose text-xl text-white text-opacity-80">
                  Program Epilogue
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
          
          <div className={classNames( showTitle ? 'mt-12' : '', 'mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-4 lg:max-w-7xl transition ease-in-out ')}>
            {data?.getReview.review?.filter((v,i) => (i < 4)).map((post: any,i ) => (
              <div key={post.id} className="rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 hover:scale-110">
              <div className=" bg-white p-6 ">
                <div className="">
                  <p className="text-md font-medium text-cyan-600">
                    <a className="hover:underline">
                      {area(post.area)}
                    </a>
                  </p>
                  <a className="block mt-2">
                    {/* <p className="text-xl font-semibold text-gray-900 h-10">{post.title}</p> */}
                    <p className="mt-3 text-base text-gray-500">{(post.review.length > 110) ? post.review.substring(0,100) + '..' : post.review}</p>
                  </a>
                </div>
                <div className="mt-6  items-center">
                  <div className="ml-3">
                    <div className="flex justify-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            post.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                            'flex-shrink-0 h-5 w-5'
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      <a className="hover:underline">
                        {post.company} {post.name} {post.title}
                      </a>
                    </p>
                   
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