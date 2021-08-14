import React from 'react';
import { useForm } from 'react-hook-form';
import { Header } from '../components/header';

export const Reference = () =>{
  const { register, getValues, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = () => {
    const { email, password } = getValues();
  }
  const inValid = () => {
    console.log(errors)
  }

  return (
    <div className="h-screen bg-gray-200" >
      <Header />
      <div className="grid justify-items-center mt-40 bg-gray-200 pb-40">
        <div className="sm:mt-0 ">
          <div className="md:grid md:grid-cols-4 md:gap-6">
            <div className="md:col-span-4 grid justify-items-center">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl mb-8 font-medium leading-6 text-gray-900">추천서 요청</h3>
                {/* <p className="mt-1 text-sm text-gray-600">추천서를 받고싶은 입사지원자의 정보를 입력해 주세요.</p> */}
              </div>
            </div>
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">1. 입사지원자 정보</h3>
                <p className="mt-1 text-sm text-gray-600">추천서를 받고싶은 입사지원자의 정보를 입력해 주세요.</p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-3">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          이름
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border-2"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          주민등록번호
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                          이메일 주소
                        </label>
                        <input
                          type="text"
                          name="email-address"
                          id="email-address"
                          autoComplete="email"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="col-span-3">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                          전 직장 이름
                        </label>
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                          성별
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>남</option>
                          <option>여</option>
                        </select>
                      </div>

                     

                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">2. 회사가 원하는 인재상</h3>
                <p className="mt-1 text-sm text-gray-600">회사가 원하는 인재상을 선택해주세요.</p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-3">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3 pt-4">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          직무
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border-2"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 pt-4">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          직책
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 pt-8">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                          가장 중요하게 생각하는 것은? ( 1순위 )
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>성실</option>
                          <option>책임</option>
                          <option>소통</option>
                          <option>열정</option>
                          <option>협력</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3 pt-8">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                          가장 중요하게 생각하는 것은? ( 2순위 )
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>성실</option>
                          <option>책임</option>
                          <option>소통</option>
                          <option>열정</option>
                          <option>협력</option>
                        </select>
                      </div>

                      <div className="col-span-6 pt-8">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                          입사지원자에 대해 가장 알고 싶은 점을 적어주세요.
                        </label>
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      제출
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <div className="w-1/4">
          <h1 className="font-bold py-24 text-3xl grid justify-items-center">평판조회</h1>
          <form className="" onSubmit={handleSubmit(onSubmit, inValid)}>
            <input 
              {...register("name", {
                required: "이름을 입력해주세요",
              })}
              type="name" 
              name="name" 
              required 
              className="border-b-2 my-4 grid justify-items-center w-full "
              placeholder="이름" />
            <input 
              {...register("company", {
                required: "전 직망명을 입력해주세요",
              })}
              type="company" 
              name="company" 
              required 
              className="border-b-2 my-4 grid justify-items-center w-full"
              placeholder="전 직장명" 
            />
            <input 
              {...register("직무", {
                required: "직무명을 입력해주세요",
              })}
              type="직무" 
              name="직무" 
              required 
              className="min-w-full border-b-2 my-4 grid justify-items-center w-full"
              placeholder="직무명" 
            />
             <input 
              {...register("동의서", {
                required: "동의서를 업로드해주세요.",
              })}
              type="img" 
              name="동의서" 
              required 
              className="min-w-full border-b-2 my-4 grid justify-items-center w-full"
              placeholder="동의서를 업로드해주세요." 
            />
            <button className="bg-blue-700 px-5 py-3 mt-4 text-white w-full ">평판조회 신청</button>
          </form>
          
        </div> */}
      </div>
    </div>
  )
}

