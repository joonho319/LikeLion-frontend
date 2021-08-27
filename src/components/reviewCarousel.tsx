import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

interface ReviewCardProps {
  reviewPosts: any[]
}

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export const ReviewCarousel: React.FC<ReviewCardProps> = ({reviewPosts}) => {
  return (
      <div className="bg-white mt-10">
        <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
          <div className="relative">
            <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              멘토링을 직접 받은 회사대표님들이 직접 써주신 후기글
              </p>
            <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
              멘토링을 직접 받은 회사대표님들이 직접 써주신 후기글
            </p>
          </div>
          <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-4 lg:max-w-7xl">
            {reviewPosts.filter((v,i) => (i < 8)).map((post,i ) => (
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