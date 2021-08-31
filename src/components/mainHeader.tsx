import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { url } from 'inspector';

const navigation = [
  { name: '강사 소개', href: '/introduction' },
  { name: '커리큘럼', href: '/curriculum' },
  { name: '1기 신청', href: '/apply' },
  { name: '프로그램 후기', href: '/review' },
]

export const MainHeader = () => {
  return (
    <div className="relative bg-gray-800 overflow-hidden">
        {/* <div className="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
          <svg
            className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
            width={364}
            height={384}
            viewBox="0 0 364 384"
            fill="none"
          >
            <defs>
              <pattern
                id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} fill="currentColor" />
              </pattern>
            </defs>
            <rect width={364} height={384} fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
          </svg>
        </div> */}
        <div className="relative pt-6 pb-16 sm:pb-24">
          <Popover>
            <nav
              className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
              aria-label="Global"
            >
              <div className="flex items-center flex-1">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt=""
                    />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="hidden space-x-10 md:flex md:ml-10">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-medium text-white hover:text-gray-300">
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex">
                <a
                  href="/login2"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
                >
                  로그인
                </a>
              </div>
            </nav>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">메뉴 닫기</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="/login2"
                    className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                  >
                    로그인
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-16 sm:mt-24">
            <div className="mx-auto max-w-7xl">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                  <div>
                    {/* <a
                      href="#"
                      className="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                    >
                      <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
                        We're hiring
                      </span>
                      <span className="ml-4 text-sm">Visit our careers page</span>
                      <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                    </a> */}
                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:text-3xl xl:text-4xl">
                      <span className="md:block">이곳은 스타트업을 만들고 성장시켜보는 </span>{' '}
                      <span className="text-indigo-400 md:block mt-4 lg:text-4xl xl:text-5xl">실천 중심형 학교입니다.</span>
                    </h1>
                    {/* <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                      amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.
                    </p> */}
                    {/* <p className="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10">Used by</p>
                    <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                      <div className="flex flex-wrap items-start justify-between">
                        <div className="flex justify-center px-1">
                          <img
                            className="h-9 sm:h-10"
                            src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                            alt="Tuple"
                          />
                        </div>
                        <div className="flex justify-center px-1">
                          <img
                            className="h-9 sm:h-10"
                            src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                            alt="Workcation"
                          />
                        </div>
                        <div className="flex justify-center px-1">
                          <img
                            className="h-9 sm:h-10"
                            src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                            alt="StaticKit"
                          />
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                  <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                    <div className="px-4 py-8 sm:px-10">
                      <div className="mt-2">
                        <form action="#" method="POST" className="space-y-6">
                          <div>
                            <label htmlFor="name" className="sr-only">
                              이름
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              autoComplete="name"
                              placeholder="이름"
                              required
                              className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div>
                            <label htmlFor="mobile-or-email" className="sr-only">
                              이메일
                            </label>
                            <input
                              type="text"
                              name="mobile-or-email"
                              id="mobile-or-email"
                              autoComplete="email"
                              placeholder="이메일"
                              required
                              className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div>
                            <label htmlFor="password" className="sr-only">
                              비밀번호
                            </label>
                            <input
                              id="password"
                              name="password"
                              type="password"
                              placeholder="비밀번호"
                              autoComplete="current-password"
                              required
                              className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div>
                            <button
                              type="submit"
                              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              회원가입
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                        <input
                          id="comments"
                          aria-describedby="comments-description"
                          name="comments"
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <p className="text-xs leading-5 text-gray-500 sm:ml-2">
                        {' '}
                        <a href="#" className="font-medium text-gray-900 hover:underline">
                          개인정보 수집
                        </a>
                        ,{' '}
                        <a href="#" className="font-medium text-gray-900 hover:underline">
                          마케팅 활용
                        </a>
                        에{' '}
                        <a href="#" className="font-medium text-gray-500 hover:underline">
                          모두 동의합니다
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}