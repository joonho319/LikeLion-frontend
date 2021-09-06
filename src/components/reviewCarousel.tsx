import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { StarIcon } from '@heroicons/react/solid';

interface ReviewCardProps {
  reviewPosts: any[];
}

var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
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


export const ReviewCarousel: React.FC<ReviewCardProps> = ({reviewPosts}) => {

  const style = {
    backgroundColor: "#1f2937" 
  }
  return (
    <div className="'bg-white mt-10"> 
      <div className=" py-16 lg:py-32 sm:py-24" style={style}>
        <div className="">
          <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <p className="mt-2 text-3xl font-bold text-white text-opacity-70 tracking-tight sm:text-4xl">
            멘토링을 직접 받은 회사대표님들이 직접 써주신 후기글
            </p>
            <p className="mt-5 mx-auto max-w-prose text-xl text-white text-opacity-80">
              멘토링을 직접 받은 회사대표님들이 직접 써주신 후기글
            </p>
          </div>
          <div className="mt-12 mx-auto max-w-full px-4 lg:max-w-7xl hidden lg:block lg:visible ">
            <StyledSlider {...settings}>
              {reviewPosts.filter((v,i) => (i < 8)).map((post,i ) => {
                return <div key={post.id} className="rounded-lg shadow-lg overflow-hidden">
                  <div className=" bg-white p-6">
                    <div className="">
                      <p className="text-md font-medium text-cyan-600">
                        <a href={post.category.href} className="hover:underline">
                          {post.category.name}
                        </a>
                      </p>
                      <a href={post.href} className="block mt-2">
                        {/* <p className="text-xl font-semibold text-gray-900 h-10">{post.title}</p> */}
                        <p className="mt-3 text-base text-gray-500">{(post.preview.length > 110) ? post.preview.substring(0,100) + '..' : post.preview}</p>
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
                          <a href={post.author.href} className="hover:underline">
                            {post.author.name}
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
                {reviewPosts.filter((v,i) => (i < 10)).map((post,i ) => {
                  return <div key={post.id} className="rounded-lg shadow-lg overflow-hidden">
                    <div className=" bg-white p-6">
                      <div className="">
                        <p className="text-md font-medium text-cyan-600">
                          <a href={post.category.href} className="hover:underline">
                            {post.category.name}
                          </a>
                        </p>
                        <a href={post.href} className="block mt-2">
                          {/* <p className="text-xl font-semibold text-gray-900">{post.title}</p> */}
                          <p className="mt-3 text-base text-gray-500">{(post.preview.length > 110) ? post.preview.substring(0,100) + '..' : post.preview}</p>
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
                            <a href={post.author.href} className="hover:underline">
                              {post.author.name}
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
        <div className="grid justify-items-center mt-20">
          <Link to={'review'}>
          <button
            type="button"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            후기 더보러 가기
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}