import React from 'react';


export const BusinessPlan = () =>{
  return (
    <>
      <form action="/">
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start mt-20">
          <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 ml-44">
            1. 문제인식
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <textarea
              id="about"
              name="about"
              rows={3}
              className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
              defaultValue={''}
            />
            <p className="mt-2 text-sm text-gray-500">문제인식에 대해 자세하게 작성해주세요</p>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start mt-20">
          <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 ml-44">
            2. 해결방안
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <textarea
              id="about"
              name="about"
              rows={3}
              className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
              defaultValue={''}
            />
            <p className="mt-2 text-sm text-gray-500">해결방안에 대해 자세하게 작성해주세요</p>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start mt-20">
          <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 ml-44">
            3. 비즈니스 모델
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <textarea
              id="about"
              name="about"
              rows={3}
              className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
              defaultValue={''}
            />
            <p className="mt-2 text-sm text-gray-500">비즈니스 모델에 대해 자세하게 작성해주세요</p>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <button
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            임시 저장
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            제출
          </button>
        </div>
      </form>
    </>
  )
}
