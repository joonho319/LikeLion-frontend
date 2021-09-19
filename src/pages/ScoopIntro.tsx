import { ScoopAuthorCard } from '../components/ScoopAuthorCard';
import { ScoopAuthorYoutubeCard } from '../components/ScoopAuthorYoutubeCard';
import { ScoopFooter } from '../components/ScoopFooter';
import { ScoopHeader } from '../components/ScoopHeader';
import { ScoopSubHeader } from '../components/ScoopSubHeader';
import { ScoopWebtoonCarousel } from '../components/ScoopWebtoonCaoursel';
import { ScoopWebtoonCard } from '../components/ScoopWebtoonCard';
import ScoopImage from '../images/scoopImage.png';

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


export const ScoopIntro = () => {
  
  return (
    <div className="sm:max-w-sm mx-auto sm:px-8">
      <ScoopSubHeader />
      
      <div className="w-10/12 bg-gray-300 mx-auto rounded-2xl mt-5" style={{height:"300px"}}></div>
      <div className="text-2xl font-bold mt-5 grid justify-center">스쿱(SCOOP)은?</div>
      <div className="mt-3 text-md grid justify-center">스쿱은 콘텐츠를 떠 먹여 드립니다.</div>
      <div className="text-md grid justify-center">'오늘 뭐 보지?' 고민했던 여러분께</div>
      <div className="text-md grid justify-center">아이스크림 한 스쿱처럼 다가 갈게요.</div>

      <div className="w-10/12 bg-gray-300 mx-auto rounded-2xl mt-10" style={{height:"300px"}}></div>
      <div className="text-2xl font-bold mt-5 grid justify-center">AI 추천</div>
      <div className="mt-3 text-md grid justify-center">당신이 본 웹툰, 웹소설을 분석하여</div>
      <div className="text-md grid justify-center">AI 가 맞춤형 추천을 제공해드립니다</div>

      <div className="w-10/12 bg-gray-300 mx-auto rounded-2xl mt-10" style={{height:"300px"}}></div>
      <div className="text-2xl font-bold mt-5 grid justify-center">뉴스테러</div>
      <div className="mt-3 text-md grid justify-center">매주 1회 에디터가 엄선한</div>
      <div className="text-md grid justify-center">웹툰, 웹소설을 이메일로 보내드려요.</div>

      <div className="w-10/12 bg-gray-300 mx-auto rounded-2xl mt-10" style={{height:"300px"}}></div>
      <div className="text-2xl font-bold mt-5 grid justify-center">팟빵 & 팟캐스트</div>
      <div className="mt-3 text-md grid justify-center">에디터가 모이면?</div>
      <div className="text-md grid justify-center mb-20">수다 쟁이들의 웹툰 수다</div>
      <ScoopFooter />
    </div>
  )
}
