import { useReactiveVar } from "@apollo/client";
import { Link } from "react-router-dom"
import { isLoggedInVar } from "../apollo"


export const ScoopFooter = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <div className="w-screen mx-auto md:hidden">
      <div className="fixed bottom-0 z-30 bg-white">
        <div className="w-screen h-px bg-gray-400"></div>
        <div className="w-screen grid grid-cols-4">
          <div className="text-center text-sm pt-2">
            <Link to={'/recommend'}>
              <div className="grid justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg></div>
              <div className="py-1">웹툰 추천</div>
            </Link>
          </div>
          <div className="text-center text-sm pt-2">
            <Link to={'/todayswebtoon'}>
              <div className="grid justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
              <div className="py-1">오늘의웹툰</div>
            </Link>
          </div>
          <div className="text-center text-sm pt-2">
            <Link to={'/editorRecommend'}>
              <div className="grid justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /></svg></div>
              <div className="py-1">에디터추천</div>
            </Link>
          </div>
          {isLoggedIn ?
            <div className="text-center text-sm pt-2">
              <Link to={'/profile'}>
                <div className="grid justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 grid justify-center" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></div>
                <div className="py-1">프로필</div>
              </Link>
            </div> :
            <div className="text-center text-sm pt-2">
              <Link to={'/login'}>
                <div className="grid justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg></div>
                <div className="py-1">로그인</div>
              </Link>
            </div>
          }
        </div>
      </div>
    </div>
  )
}