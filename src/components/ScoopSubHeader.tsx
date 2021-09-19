/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { useHistory } from 'react-router'
import { Link } from 'react-scroll'


export const ScoopSubHeader = () => {
  const history = useHistory();
  const moveToHome = () => {
    history.push('/');
  }
  return (
    <Disclosure as="nav" className="bg-white shadow mx-auto max-w-lg z-30">
      {window.location.pathname === '/intro' && 
        <div className="text-center py-4 font-bold text-xl grid grid-cols-3">
          <div className="pl-4" onClick={moveToHome}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </div>
          <div>회사 소개</div>
        </div>
      }
      {window.location.pathname === '/recommend' && 
        <div className="text-center py-4 font-bold text-xl grid grid-cols-3">
          <div className="pl-4" onClick={moveToHome}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </div>
          <div>웹툰추천</div>
        </div>
      }
      {window.location.pathname === '/newsletter' && 
        <div className="text-center py-4 font-bold text-xl grid grid-cols-3">
          <div className="pl-4" onClick={moveToHome}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </div>
          <div>뉴스레터</div>
        </div>
      }
      {window.location.pathname === '/editorRecommend' && 
        <div className="text-center py-4 font-bold text-xl grid grid-cols-3">
          <div className="pl-4" onClick={moveToHome}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </div>
          <div>에디터 추천</div>
        </div>
      }
      {window.location.pathname === '/todayswebtoon' && 
        <div className="text-center py-4 font-bold text-xl grid grid-cols-3">
          <div className="pl-4" onClick={moveToHome}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </div>
          <div>오늘의 웹툰</div>
        </div>
      }
      {window.location.pathname === '/profile' && 
        <div className="text-center py-4 font-bold text-xl grid grid-cols-3">
          <div className="pl-4" onClick={moveToHome}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </div>
          <div>프로필</div>
        </div>}
    </Disclosure>
  )
}