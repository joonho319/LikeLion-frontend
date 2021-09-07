import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { StarIcon } from '@heroicons/react/solid';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { getReview } from '../__generated__/getReview';
import {GET_REVIEW_QUERY, area} from './reviewCarousel';
interface ReviewCardProps {
  reviewPosts: any[];
}

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1
};

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}


export const ReviewPost: React.FC<ReviewCardProps> = ({reviewPosts}) => {
  const [ area, setArea ] = useState('idea')
  const { data } = useQuery<getReview>(GET_REVIEW_QUERY);
  const style = {
    backgroundColor: "#eeeeee"
  }

  const changeArea = (event: any) => {
    event.preventDefault();
    setArea(event.tartget.value)
  }

  return (
    <div> 
      <div className="'relative" style={style}>
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:py-16 sm:px-6 lg:px-8">
            {/* <select
              id="area"
              name="area"
              autoComplete="area"
              value={area}
              onChange={changeArea}
              className="pl-3 pr-10 py-2 max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
            >
              <option value="idea">아이디어</option>
              <option value="business_plan">사업계획서</option>
              <option value="bm">비즈니스모델</option>
              <option value="strategy">사업화전략</option>
              <option value="investment">투자전략</option>
            </select>   */}
          </div>
          <div className='mx-auto max-w-md px-4 py-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-4 lg:max-w-7xl'>
            {data?.getReview.review?.filter((v: any,i: number) => v.area === area  ).map((post: any, i) => (
              <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:w-28">
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-md font-medium text-cyan-600">
                      <a className="hover:underline flex justify-center">
                        {area}
                      </a>
                    </p>
                    <a href={post.href} className=" mt-2 flex justify-center">
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
                        <p className="text-sm font-medium text-gray-800 mt-2">
                          <a  className="hover:underline flex justify-center">
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
        <div className=" h-16"></div>
      </div>
    </div>
  )
}