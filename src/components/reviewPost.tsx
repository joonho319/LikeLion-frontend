import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { StarIcon } from '@heroicons/react/solid';

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

  const style = {
    backgroundColor: "#eeeeee"
  }
  return (
    <div> 
      <div className="'relative" style={style}>
        <div className="relative">
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
          <div className='mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-4 lg:max-w-7xl'>
            {reviewPosts.map((post, i) => (
              <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:w-28">
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
            ))}
          </div>
        </div>
        <div className=" h-16"></div>
      </div>
    </div>
  )
}