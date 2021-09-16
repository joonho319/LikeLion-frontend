import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { StarIcon } from '@heroicons/react/solid';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { getReview } from '../__generated__/getReview';
import { GET_REVIEW_QUERY } from './reviewCarousel';

var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  padding: "60px",
};

var small_settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  padding: "60px",
};

const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none; 
      border-radius:2px
      padding:3px;
      text-align:center;
      margin-right:4px;
      margin-left:4px;
    }
`;


function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export const area = (area: any) => {
  if(area === 'idea') {
    return '아이디어'
  } else if(area === 'business_plan') {
    return '사업계획서'
  } else if(area === 'bm') {
    return '비즈니스모델'
  } else if(area === 'strategy') {
    return '사업화전략'
  } else {
    return '투자전략'
  }
}

interface ReviewCarouselProps {
  filter: string;
}


export const ReviewCard:React.FC<ReviewCarouselProps> = ({filter}) =>{
  const { data } = useQuery<getReview>(GET_REVIEW_QUERY);
  
  return (
    <div className="'bg-white pb-20"> 
      <div className="py-16 lg:py-4 sm:py-24">
        <div className="">
          <div className="mt-28 mx-auto max-w-full px-4 lg:max-w-4xl hidden lg:block lg:visible ">
            <StyledSlider {...settings}>
              {data?.getReview.review?.filter((v: any,i: number) => (v.area === filter)).map((post: any,i: number ) => {
                return <div key={post.id} className="rounded-lg shadow-lg overflow-hidden">
                  <div className=" bg-white p-6">
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
              })}
              </StyledSlider>
            </div>
            <div className="mt-12 mx-auto max-w-md px-4 sm:max-w-lg lg:hidden">
              <StyledSlider {...small_settings}>
                {data?.getReview.review?.filter((v: any,i: number) => (v.area === filter)).map((post: any,i: number ) => {
                  return <div key={post.id} className="rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-white p-6">
                      <div className="">
                        <p className="text-md font-medium text-cyan-600">
                          <a className="hover:underline">
                            {area(post.area)}
                          </a>
                        </p>
                        <a className="block mt-2">
                          {/* <p className="text-xl font-semibold text-gray-900">{post.title}</p> */}
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
                })}
              </StyledSlider>
            </div>
          </div>
        </div>
      </div>
    )
  }