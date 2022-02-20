/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { PlusSmIcon } from '@heroicons/react/solid'
import Logo from '../images/logotemp.png';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const Container = styled.div`
  &:hover {
    background-color: white;
  }
  -webkit-transition: background-color 300ms linear;
  -ms-transition: background-color 300ms linear;
  transition: background-color 300ms linear;
`;
const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: '전시회 리스트', href: 'exhibition', current: true },
  { name: '지갑연결', href: 'wallet', current: false },
 
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}


export const Navbar = () => {
  const history = useHistory();
  const [isScroll, setIsScroll] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const changeBackground = () => {
    if(window.scrollY > 0 ) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }
  const IsHover = () => {
    setIsHover(true)
  }

  const IsUnHover = () => {
    setIsHover(false);
  }

  const connectWallet = () => {
    console.log("connect wallet")
  }

  const moveToTop = ()  => {
    window.scrollTo({
      top: 0,
      behavior:"smooth"
  });
  }
  window.addEventListener('scroll', changeBackground);
  let nav = document.getElementById("nav");
  nav?.addEventListener('mouseover', IsHover)
  nav?.addEventListener('mouseout', IsUnHover)
  
  return (
    <Disclosure as="nav" id='nav'  >
      {({ open }) => (
        <Container className={classNames(isScroll ? 'bg-white fixed top-0 w-full text-gray-400' : 'absolute  w-full ', 'bg-transparent hover:bg-white hover:text-gray-400  top-0 z-50')}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between h-20 items-center">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu buttonb */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  
                  <img
                    className="w-auto cursor-pointer"
                    style={{height:'150px'}}
                    onClick={() => moveToTop()}
                    src={Logo}
                    alt="Workflow"
                  />
                </div>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4 hover:text-black">
                  {navigation.map((item) => (
                    <div
                      key={item.name}
                      className={classNames(
                          (isScroll || isHover) ? 'text-gray-500' :'text-white ',
                        'px-3 py-2 rounded-md font-medium hover:text-black cursor-pointer'
                      )}
                      style={{fontSize: '16px', color: ''}}
                      aria-current={item.current ? 'page' : undefined}
                      onClick={() => {
                        if(item.href === 'wallet' ) {
                          connectWallet();
                        } else {
                          history.push(`/${item.href}`)
                        }
                      }}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
              {/* <div className="flex items-center">
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="text-black"
                  >
                    <img src={'https://storage.googleapis.com/opensea-static/Logomark/OpenSea-Full-Logo%20(light).svg'} 
                      className="h-6 mt-2"
                    />
                  </button>
                </div>
                
              </div> */}
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-black' : 'text-white hover:bg-gray-700 hover:text-black',
                    'block px-3 py-2 rounded-md text-xs font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </Container>
      )}
    </Disclosure>
  )
}
