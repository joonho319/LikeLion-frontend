import { Link } from "react-router-dom"


export const ScoopFooter = () => {
  return (
    <div className="w-screen mx-auto">
      <div className="fixed bottom-0 z-30 bg-white">
        <div className="w-screen h-px bg-gray-400"></div>
        <div className="w-screen sm:max-w-md grid grid-cols-4">
          <div className="text-center text-sm pt-2">
            <Link to={'/recommend'}>
              <div className="grid justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg></div>
              <div className="py-1">웹툰 추천</div>
            </Link>
          </div>
          <div className="text-center text-sm pt-2">
            <div className="grid justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
            <div className="py-1">오늘의웹툰</div>
          </div>
          <div className="text-center text-sm pt-2">
            <div className="grid justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /></svg></div>
            <div className="py-1">에디터추천</div>
          </div>
          <div className="text-center text-sm pt-2">
            <div className="grid justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 grid justify-center" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></div>
            <div className="py-1">프로필</div>
          </div>
        </div>
      </div>
    </div>
  )
}