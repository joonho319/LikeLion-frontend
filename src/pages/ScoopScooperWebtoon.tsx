import { ScoopScooperCard } from '../components/ScoopScooperCard';
import { ScoopFooter } from '../components/ScoopFooter';
import { ScoopHeader } from '../components/ScoopHeader';
import { ScoopSubHeader } from '../components/ScoopSubHeader';
import { ScoopScooperWebtoonCard } from '../components/ScoopScooperWebtoonCard';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const scooper1 = {
  src: '',
  name: '바닐라',
}

const scooper2 = {
  src: '',
  name: '민트초코',
}

const scooper3 = {
  src: '',
  name: '봉봉',
}

const scooper4 = {
  src: '',
  name: '죠스바',
}

const webtoon1 = {
  title: '바닐라 맛 웹툰이 궁금하지 않아요?',
  date: '2021.04.02'
}

const webtoon2 = {
  title: '빨...빨간맛! 19금 웹툰',
  date: '2021.03.02'
}


export const ScoopScooperWebtoon = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  },[]);
  return (
    <div className="sm:max-w-sm mx-auto sm:px-8">
      {/* <ScoopHeader title={'에디터 추천'} /> */}
      <ScoopSubHeader />
      <div className="w-11/12 mx-auto">
        <div className="text-xl font-bold mt-5">{webtoon1.title}</div>
        <div className="text-xs mt-3">{webtoon1.date}</div>

        <div className="bg-gray-200 mt-3" style={{height:"160px"}}></div>
        <div className="mt-3">그들에게 생명을 불어 넣는 것은 따뜻한 봄바람이다 풀밭에 속잎나고 가지에 싹이 트고 꽃 피고 새 우는 봄날의 천지는 얼마나 기쁘며 얼마나 아름다우냐? 이것을 얼음 속에서 불러 내는 것이 따뜻한 봄바람이다 인생에 따뜻한</div>
        <div className="grid grid-cols-2 mt-3 gap-2">
          <div className="bg-gray-200 mt-3" style={{height:"160px"}}></div>
          <div className="bg-gray-200 mt-3" style={{height:"160px"}}></div>
        </div>
        <div className="mt-3">인생을 풍부하게 하는 온갖 과실이 어디 있으랴? 이상! 우리의 청춘이 가장 많이 품고 있는 이상! 이것이야말로</div>
        <div className="mt-6">놀이 뜨고 열락의 새가 운다사랑의 풀이 없으면 인간은 사막이다 오아이스도 없는 사막이다 보이는 끝까지 찾아다녀도 목숨이 있는 때까지 방황하여도 보이는 것은 거친 모래뿐일 것이다 이상의 꽃이 없으면 쓸쓸한 인간에 남는 것은 영락과 부패 뿐이다 낙원을 장식하는 천자만홍이 어디 있으며 인생을 풍부하게 하는</div>
        <div className="mt-6"> 이상! 이것이야말로 무한한 가치를 가진 것이다 사람은 크고 작고 간에 이상이 있음으로써 용감하고 굳세게 살 수 있는 것이다 석가는 무엇을 위하여 설산에서 고행을 하였으며 예수는 무엇을 위하여 광야에서</div>
        <div className="bg-blue-400 text-center mb-20 py-3 rounded-md mt-3 text-white"><Link to={'/newsletter'}>뉴스레터 신청하기</Link></div>
      </div>

      <ScoopFooter />
    </div>
  )
}