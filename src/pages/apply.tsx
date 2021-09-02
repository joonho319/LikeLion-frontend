import { Header2 } from "../components/header2"

export const Apply = () => {
  return (
    <>
      <Header2 page={'program'} />
      <div className="max-w-2xl mx-auto p-4 my-28 grid justify-items-center shadow-lg rounded-md" style={{ border: "solid 1px #eeeeee"}}>
        <form className="">
          <div className="space-y-8 sm:space-y-5">
            <div>
              <h3 className="text-2xl mt-10 font-bold text-center text-indigo-700">1기 수강신청</h3>
            </div>
            <div className="pt-8 sm:pt-10 sm:space-y-5">
              <div className=" sm:space-y-5">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 sm:mt-px p-1">
                    신청자명
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="given-name"
                      placeholder="신청자명을 입력해주세요"
                      className="max-w-lg block w-full border-2 p-1  focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 sm:mt-px p-1">
                    연락처
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      id="phone"
                      name="phone"
                      type="phone"
                      autoComplete="phone"
                      placeholder="휴대폰 번호를 입력해주세요"
                      className="block max-w-lg w-full border-2 p-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5">
                  <label htmlFor="region" className="block text-sm font-medium text-gray-700 sm:mt-px p-1">
                    지역
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      id="region"
                      name="region"
                      type="region"
                      autoComplete="region"
                      placeholder="지역를 입력해주세요."
                      className="block max-w-lg w-full border-2 p-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="pt-6 sm:pt-5">
                  <div role="group" aria-labelledby="label-notifications">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                      <div>
                        <div
                          className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
                          id="label-notifications"
                        >
                          아이디어 유무
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <div className="max-w-lg">
                          <p className="text-sm text-gray-500">현재 가지고 있는 창업 아이디어가 있으신가요?</p>
                          <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                              <input
                                id="idea"
                                name="idea"
                                type="radio"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                              />
                              <label htmlFor="idea" className="ml-3 block text-sm font-medium text-gray-700">
                                아이디어 있음
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="no-idea"
                                name="idea"
                                type="radio"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                              />
                              <label htmlFor="no-idea" className="ml-3 block text-sm font-medium text-gray-700">
                                아이디어 없음
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6 sm:pt-5">
                  <div role="group" aria-labelledby="label-notifications">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                      <div>
                        <div
                          className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
                          id="label-notifications"
                        >
                          창업 경험
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <div className="max-w-lg">
                          <p className="text-sm text-gray-500">창업을 해본 경험이 있거나 현재 사업을 하고 계신가요?</p>
                          <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                              <input
                                id="experience"
                                name="experience"
                                type="radio"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                              />
                              <label htmlFor="experience" className="ml-3 block text-sm font-medium text-gray-700">
                                경험 있음
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="no-experience"
                                name="experience"
                                type="radio"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                              />
                              <label htmlFor="no-experience" className="ml-3 block text-sm font-medium text-gray-700">
                                경험 없음
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5">
                <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px">
                  남기고 싶은 말
                </label>
                <div className="mt-3 sm:mt-0 sm:col-span-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={6}
                    className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-12 mb-10">
            <div className="flex justify-center">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                수강신청
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
