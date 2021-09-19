/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'


export const ScoopSubHeader = () => {
  
  return (
    <Disclosure as="nav" className="bg-white shadow mx-auto max-w-lg z-30">
      {window.location.pathname === '/intro' && <div className="text-center py-4 font-bold text-xl">회사 소개</div>}
      {window.location.pathname === '/recommend' && <div className="text-center py-4 font-bold text-xl">웹툰 추천</div>}
      {window.location.pathname === '/newsletter' && <div className="text-center py-4 font-bold text-xl">뉴스 레터</div>}
    </Disclosure>
  )
}