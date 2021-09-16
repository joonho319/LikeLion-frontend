import { Fragment, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { url } from 'inspector';
import { authTokenVar, isLoggedInVar } from '../apollo';
import { useReactiveVar } from '@apollo/client';
import { useHistory } from 'react-router';

const navigation = [
  { name: '메이커 소개', href: '/introduction' },
  { name: '커리큘럼', href: '/curriculum' },
  { name: '정규수업(apply)', href: '/program' },
  { name: '프로그램 후기', href: '/review' },
]

interface MainHeaderProps {
  ismain: boolean;
}


export const MainHeader:React.FC<MainHeaderProps> = ({ismain}) =>{
  const history = useHistory();
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const [ navBar, setNavBar ] = useState(false);
  
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    isLoggedInVar(false)
    history.push('/')
  }
  
  const changeNavBar = () => {
    console.log(window.scrollY)
    console.log(navBar)
    if(window.scrollY >= 30) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  } 

  window.addEventListener("scroll", changeNavBar);

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className={classNames(
      navBar ? 'sm:bg-gray-800 w-screen sticky' : 'bg-transparent absolute w-screen',
      ' top-0 z-30' )}>
      <div className="pt-6 sm:pb-6 overflow-hidden">
        <Popover>
          <nav
            className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="/">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt=""
                  />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className={classNames(navBar ? 'text-white': 'text-black', 'z-40 hidden space-x-10 md:flex md:ml-10')}>
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="font-medium hover:text-gray-300">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden md:flex">
              {isLoggedIn ?
              <button onClick={logout}>
                <a
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
                >
                  로그아웃
                </a> 
              </button> :
              <>
                <a
                  href="/login"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
                >
                  로그인
                </a>
                <a
                href="/signup"
                className="inline-flex items-center ml-3 px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
              >
                회원가입
              </a>
            
              </>
              }
              
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
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden overflow-auto z-30"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 z-40 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">메뉴 닫기</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-20 space-y-1">
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
                {isLoggedIn ?
                <a
                  onClick={logout}
                  className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                >
                  로그아웃
                </a> :
                <a
                  href="/login"
                  className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                >
                  로그인
                </a>
                }
                
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  )
}