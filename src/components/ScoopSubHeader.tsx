/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'


function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export const ScoopSubHeader = () => {
  const history = useHistory();
  const moveToHome = () => {
    history.push('/');
  }

  const moveToEditor = () => {
    history.push('/editorRecommend')
  }
  return (
    <div className="">
      <div className="hidden md:grid md:grid-cols-12 mt-5"> 
        <div className="col-span-2"></div>
        <div className="col-span-1 font-bold text-2xl"><Link to={'/'}>SCOOP</Link></div>
        <div className="col-span-6 grid grid-cols-6 gap-8">
          <div></div>
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
          <div 
            className={classNames(window.location.pathname === '/intro' ? 'text-blue-500' : 'text-black', 'text-center text-lg')}
          ><Link to={'/intro'}>문의 하기</Link> </div>
        </div>
        <div className="col-span-1 grid justify-end text-lg">봉봉</div>
        <div className="col-span-2"></div>
        <div className="col-span-1"></div>
        <div className="col-span-10 mt-5 bg-black" style={{height:"1px"}}></div>
        <div className="col-span-1"></div>
      </div>
      <Disclosure as="nav" className="bg-white shadow mx-auto max-w-lg md:hidden z-30">
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
        {window.location.pathname === '/scooperWebtoon' && 
          <div className="text-center py-4 font-bold text-xl grid grid-cols-3">
            <div className="pl-4" onClick={moveToEditor}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </div>
            <div>바닐라's 추천</div>
            <div className="pr-4 grid justify-end" onClick={moveToEditor}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " viewBox="0 0 20 20" fill="currentColor"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" /></svg>
            </div>
          </div>}
      </Disclosure>
    </div>
  )
}