import { ScoopFooter } from '../components/ScoopFooter';
import { ScoopHeader } from '../components/ScoopHeader';
import { ScoopLikeWebtoonCard } from '../components/ScoopLikeWebtoonCard';
import { ScoopSubHeader } from '../components/ScoopSubHeader';
import { ScoopTagCard } from '../components/ScoopTagCard';
import { ScoopWebtoonCard } from '../components/ScoopWebtoonCard';

const webtoon = {
  src: '',
  title: '대학일기',
  platform: '네이버 웹툰'
}

export const ScoopProfile = () => {
  
  return (
    <div className="sm:max-w-sm mx-auto sm:px-8">
      <ScoopHeader title={'마이페이지'} />

      <div className="w-11/12 mx-auto grid grid-cols-5 mt-3">
        <div className="col-span-4">
          <div className="flex items-center text-lg font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            봉봉
          </div>
        </div>
        <div className="col-span-1 border rounded-3xl py-2 px-2">
          <div className="flex items-center text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>
            설정
          </div>
        </div>
      </div>
      
      <div className="font-bold mx-auto text-xl w-11/12 mt-5">내가 본 웹툰</div>
      <div className="w-11/12 mx-auto grid grid-cols-2 gap-3 mt-2">
        <div className="py-4 px-3 border rounded-xl bg-green-400">
          네이버 웹툰
          <div className="font-bold text-xl">37개</div>
        </div>
        <div className="py-4 px-3 border rounded-xl bg-yellow-400">
          카카오 웹툰
          <div className="font-bold text-xl">27개</div>
        </div>
        <div className="py-4 px-3 border rounded-xl bg-red-400">
          탑툰
          <div className="font-bold text-xl">3개</div>
        </div>
        <div className="py-4 px-3 border rounded-xl bg-blue-400">
          K툰
          <div className="font-bold text-xl">67개</div>
        </div>
      </div>

      <div className="font-bold mx-auto text-xl w-11/12 mt-7">내가 좋아하는 장르</div>
      <div className="grid mx-auto w-11/12 grid-cols-4 gap-2 text-center">
        <ScoopTagCard tag={'드라마'} />
        <ScoopTagCard tag={'스릴러'} />
        <ScoopTagCard tag={'액션'} />
        <ScoopTagCard tag={'SF'} />
      </div>    

      <div className="font-bold mx-auto text-xl w-11/12 mt-7">내가 좋아하는 작가</div>
      <div className="grid mx-auto w-11/12 grid-cols-4 gap-2 text-center">
        <ScoopTagCard tag={'자까'} />
        <ScoopTagCard tag={'주호민'} />
        <ScoopTagCard tag={'김호드'} />
        <ScoopTagCard tag={'YOON'} />
      </div> 

      <div className="font-bold mx-auto text-xl w-11/12 mt-7">내가 찜한 웹툰</div>
      <div className="grid mx-auto w-11/12 grid-cols-2 gap-2 text-center mt-2 mb-20">
        <ScoopLikeWebtoonCard webtoon={webtoon} />
        <ScoopLikeWebtoonCard webtoon={webtoon} />
      </div>
      <ScoopFooter />
    </div>
  )
}
