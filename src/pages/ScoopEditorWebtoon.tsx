import { ScoopScooperCard } from '../components/ScoopScooperCard';
import { ScoopFooter } from '../components/ScoopFooter';
import { ScoopHeader } from '../components/ScoopHeader';
import { ScoopSubHeader } from '../components/ScoopSubHeader';
import { ScoopScooperWebtoonCard } from '../components/ScoopScooperWebtoonCard';

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


export const ScoopEditorWebtoon = () => {
  
  return (
    <div className="sm:max-w-sm mx-auto sm:px-8">
      {/* <ScoopHeader title={'에디터 추천'} /> */}
      <ScoopSubHeader />
      <div className="w-11/12 mx-auto">
        <div className="text-lg font-bold mt-7">스쿠퍼 in 스쿱하우스</div>
        <div className="mb-10 mt-5 grid grid-cols-4 gap-4">
          <ScoopScooperCard scooper={scooper1} />
          <ScoopScooperCard scooper={scooper2} />
          <ScoopScooperCard scooper={scooper3} />
          <ScoopScooperCard scooper={scooper4} />
        </div> 

        <div className="grid grid-cols-2 mt-5 ">
          <div className="text-lg font-bold">
            바닐라's 추천
          </div>
          <div className="grid justify-end text-sm pr-2 ">
            더보기 {'>'}
          </div>
        </div>
        <div className="mb-10 mt-3 grid grid-cols-2 gap-4">
          <ScoopScooperWebtoonCard webtoon={webtoon1} />
          <ScoopScooperWebtoonCard webtoon={webtoon2} />
          <ScoopScooperWebtoonCard webtoon={webtoon1} />
          <ScoopScooperWebtoonCard webtoon={webtoon2} />
        </div> 

        <div className="grid grid-cols-2 mt-5 ">
          <div className="text-lg font-bold">
            민트초코's 추천
          </div>
          <div className="grid justify-end text-sm pr-2 ">
            더보기 {'>'}
          </div>
        </div>
        <div className="mb-20 mt-3 grid grid-cols-2 gap-4 ">
          <ScoopScooperWebtoonCard webtoon={webtoon1} />
          <ScoopScooperWebtoonCard webtoon={webtoon2} />
          <ScoopScooperWebtoonCard webtoon={webtoon1} />
          <ScoopScooperWebtoonCard webtoon={webtoon2} />
        </div>  

      </div>


      <ScoopFooter />
    </div>
  )
}
