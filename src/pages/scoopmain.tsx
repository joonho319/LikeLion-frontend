import { Link } from 'react-router-dom';
import { ScoopAuthorCard } from '../components/ScoopAuthorCard';
import { ScoopAuthorYoutubeCard } from '../components/ScoopAuthorYoutubeCard';
import { ScoopFooter } from '../components/ScoopFooter';
import { ScoopHeader } from '../components/ScoopHeader';
import { ScoopSubHeader } from '../components/ScoopSubHeader';
import { ScoopWebtoonCarousel } from '../components/ScoopWebtoonCaoursel';
import { ScoopWebtoonCard } from '../components/ScoopWebtoonCard';
import ScoopImage from '../images/scoopImage.png';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const webtoons = [
  {
    src: '',
    title: '대학일기',
    platform: '네이버 웹툰'
  },
  {
    src: '',
    title: '대학일기',
    platform: '네이버 웹툰'
  },
  {
    src: '',
    title: '대학일기',
    platform: '네이버 웹툰'
  },
  {
    src: '',
    title: '대학일기',
    platform: '네이버 웹툰'
  },
]

const webtoon = {
    src: '',
    title: '대학일기',
    platform: '네이버 웹툰'
}

const author = {
  src: '',
  name: '자까',
  platform: '네이버 웹툰'
}
const youtube = {
  src: '',
  title: '침착맨',
  author: '이말년'
}


export const ScoopMain = () => {
  
  return (
    <div className="sm:max-w-md mx-auto sm:px-8">
      <ScoopHeader title={'SCOOP'} />
      <div className="text-2xl font-bold mt-8 grid justify-center">
        <div>나에게 맞는 웹툰을</div>
        <div>AI가 추천해드려요.</div>
      </div>
      
      <div className="mt-8" style={{backgroundImage: `url(${ScoopImage})`, backgroundSize: '100% 100%', backgroundRepeat:"no-repeat", height:"250px"}}> </div>
      
      <div className="text-md text-gray-700 mt-9 grid justify-center ">'오늘은 뭐보지?' '볼 게 없네.'라고 생각했던</div>
      <div className="text-md text-gray-700  grid justify-center ">분들에게 스쿱하우스가 찾아드립니다.</div>
      
      <div className="rounded-3xl bg-red-500 p-2 mt-9 text-center text-white w-11/12 mx-auto"><Link to={'/recommend'}>웹툰 추천받기</Link></div>
      
      <div className="w-11/12 mx-auto text-lg font-bold mt-10">스쿱 에디터's 추천</div>
      <div className="mb-10 w-11/12 mx-auto mt-3 grid grid-cols-2 gap-4">
        <ScoopWebtoonCard webtoon={webtoon} />
        <ScoopWebtoonCard webtoon={webtoon} />
      </div>  

      <div className="w-11/12 mx-auto text-lg font-bold mt-14">웹툰 작가가 궁금해요?</div>
      <div className="mb-10 w-11/12 mx-auto mt-5 grid grid-cols-3 gap-4">
        <ScoopAuthorCard author={author} />
        <ScoopAuthorCard author={author} />
        <ScoopAuthorCard author={author} />
      </div> 

      <div className="w-11/12 mx-auto text-lg font-bold mt-10">이번주에 추천된 작품이에요.</div>
      <div className="mb-10 w-11/12 mx-auto mt-3 grid grid-cols-2 gap-4">
        <ScoopWebtoonCard webtoon={webtoon} />
        <ScoopWebtoonCard webtoon={webtoon} />
      </div> 

      <div className="w-11/12 mx-auto text-lg font-bold mt-10">웹툰 작가 유튜부 모음</div>
      <div className="mb-10 w-11/12 mx-auto mt-3 grid grid-cols-1 gap-4">
        <ScoopAuthorYoutubeCard Youtube={youtube} />
      </div>   

      <div className="w-11/12 mx-auto text-lg font-bold mt-10">AI가 제 멋대로 추천해봐요.</div>
      <div className="mb-24 w-11/12 mx-auto mt-3 grid grid-cols-2 gap-4">
        <ScoopWebtoonCard webtoon={webtoon} />
        <ScoopWebtoonCard webtoon={webtoon} />
      </div>   

      <ScoopFooter />
    </div>
  )
}
