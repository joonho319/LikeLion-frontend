/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ChartBarIcon,
  CursorClickIcon,
  DocumentReportIcon,
  MenuIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import { isLoggedInVar } from '../apollo'
import { useReactiveVar } from '@apollo/client'

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: RefreshIcon,
  },
  {
    name: 'Reports',
    description: 'Get detailed reports that will help you make more informed decisions ',
    href: '#',
    icon: DocumentReportIcon,
  },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
  },
  { name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it.', href: '#' },
  { name: 'Events', description: 'See what meet-ups and other events we might be planning near you.', href: '#' },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#' },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

interface TitleProps {
  title: any
}

export const ScoopHeader: React.FC<TitleProps> = ({
  title
}) => { 
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    localStorage.removeItem('directpage');
    isLoggedInVar(false)
    alert('로그아웃 되었습니다.')
  }
  

  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <>
      <div className="hidden lg:flex mt-5"> 
        <div className="lg:flex-1"></div>
        <div className="lg:flex-shrink-0 w-8/12">
          <div className="flex justify-around items-center">
            <div className="font-bold text-2xl col-span-4 "><Link to={'/'}>SCOOP</Link></div>
            <div className="flex  gap-10 ">
              <div 
                className={classNames(window.location.pathname === '/recommend' ? 'text-blue-500' : 'text-black', 'text-center text-lg')}
              ><Link to={'/recommend'}>웹툰 추천</Link></div>
              <div 
                className={classNames(window.location.pathname === '/todayswebtoon' ? 'text-blue-500' : 'text-black', 'text-center text-lg')}
              ><Link to={'/todayswebtoon'}>오늘의 웹툰</Link> </div>
              <div 
                className={classNames(window.location.pathname === '/editorRecommend' ? 'text-blue-500' : 'text-black', 'text-center text-lg')}
              ><Link to={'/editorRecommend'}>에디터 추천</Link> </div>
              <div 
                className={classNames(window.location.pathname === '/rate' ? 'text-blue-500' : 'text-black', 'text-center text-lg')}
              ><Link to={'/rate'}>웹툰 순위</Link> </div>
              <div className="text-center text-lg"><a href={"https://compassionate-stonebraker-179b2c.netlify.app/"}>스쿱버스</a></div>
            </div>
            <div className="col-span-1 grid justify-items-end text-lg">
              {isLoggedIn ? 
                <Link to={'/logout'} onClick={logout}>
                  로그아웃
                </Link>:
                <Link to={'/login'}>
                  로그인
                </Link>
              }
            </div>
            
          </div>
        </div>
        <div className="lg:flex-1"></div>
      </div>
      <div className="lg:flex hidden">
        <div className="lg:flex-1"></div>
        <div className="lg:flex-shrink-0" style={{width:"1200px"}}>
          <div className="w-full  mt-5 bg-black" style={{height:"1px"}}></div>
        </div>
        <div className="lg:flex-1"></div>

      </div>
      <Disclosure as="nav" className="bg-white shadow mx-auto  lg:hidden">
        {({ open }) => (
          <>
            <div className="max-w-lg mx-auto lg:px-8">
              <div className="relative flex justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center ">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 ">
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-xl flex items-center font-bold">
                  {title}
                  </div>
                </div>
                  {/* Profile dropdown */}
                {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              프로필
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              설정
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              로그아웃
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div> */}
              </div>
            </div>

            <Disclosure.Panel >
              <div className="pt-2 pb-4 space-y-1">
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                <div className="w-full h-px bg-gray-400"></div>
                <a
                  href="/intro"
                  className="border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  회사 소개
                </a>
                <div className="w-full h-px bg-gray-400"></div>
                <a
                  href="/"
                  className="border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  웹툰 순위
                </a>
                <div className="w-full h-px bg-gray-400"></div>
                <a
                  href="/newsletter"
                  className="border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  뉴스레터 받기
                </a>
                <div className="w-full h-px bg-gray-400"></div>
                <a
                  href="https://compassionate-stonebraker-179b2c.netlify.app/"
                  className="border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  스쿱버스
                </a>
                <div className="w-full h-px bg-gray-400"></div>
                <a
                  href="/"
                  className="border-transparent text-blue-500 block pl-3 pr-4 py-2 border-l-4 text-sm font-medium"
                >
                  스쿠퍼로 참여하기
                </a>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
}
