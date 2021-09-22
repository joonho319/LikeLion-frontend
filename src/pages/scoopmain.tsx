import { Link } from 'react-router-dom';
import { ScoopAuthorCard } from '../components/ScoopAuthorCard';
import { ScoopAuthorYoutubeCard } from '../components/ScoopAuthorYoutubeCard';
import { ScoopFooter } from '../components/ScoopFooter';
import { ScoopSubHeader } from '../components/ScoopSubHeader';
import { ScoopWebtoonCarousel } from '../components/ScoopWebtoonCaoursel';
import { ScoopWebtoonCard } from '../components/ScoopWebtoonCard';
import ScoopImage from '../images/scoopImage.png';
import { ScoopHeader } from '../components/ScoopHeader';
import { useForm } from 'react-hook-form';

interface IForm {
  name: string;
  email: string;
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
  const { register, getValues, handleSubmit, formState: { errors } } = useForm<IForm>();

  const onSubmit = () => {
    const { email, name } = getValues();
    console.log(email, name, "df")
  }
  const inValid = () => {
    console.log(errors)
  }

  return (
    <div className="mx-auto ">
      <ScoopHeader title={'SCOOP'} />
      
      {/* 모바일 */}
      <div className="text-2xl font-bold mt-8 grid justify-center md:hidden">
        <div>나에게 맞는 웹툰을</div>
        <div>AI가 추천해드려요.</div>
      </div>
      <div className="mt-8 md:hidden" style={{backgroundImage: `url(${ScoopImage})`, backgroundSize: '100% 100%', backgroundRepeat:"no-repeat", height:"250px"}}> </div>
      <div className="text-md text-gray-700 mt-9 grid justify-center md:hidden">'오늘은 뭐보지?' '볼 게 없네.'라고 생각했던</div>
      <div className="text-md text-gray-700  grid justify-center md:hidden">분들에게 스쿱하우스가 찾아드립니다.</div>
      <div className="rounded-3xl bg-red-500 p-2 mt-9 text-center text-white w-11/12 mx-auto md:hidden"><Link to={'/recommend'}>웹툰 추천받기</Link></div>
      
      {/* 데스크탑 */}
      <div className="hidden md:grid md:grid-cols-12 gap-10">
        <div className="col-span-2"></div>
        <div className="mt-8 col-span-5" style={{backgroundImage: `url(${ScoopImage})`, backgroundSize: '100%', backgroundRepeat:"no-repeat", height:"600px"}}> </div>
        <div className="text-2xl font-bold mt-8 col-span-3">
          <div className="mt-10 text-4xl">나에게 맞는 웹툰을</div>
          <div className="text-4xl mt-3">AI가 추천해드려요.</div>
          <div className="text-lg text-gray-700 mt-12 ">'오늘은 뭐보지?' '볼 게 없네.'라고 생각했던</div>
          <div className="text-lg text-gray-700  ">분들에게 스쿱하우스가 찾아드립니다.</div>
          <div className="rounded-3xl bg-red-500 p-2 mt-9 text-center text-white text-base"><Link to={'/recommend'}>웹툰 추천받기</Link></div>
        </div>
        <div className="col-span-2"></div>
      </div>

      <div className="w-11/12 mx-auto text-lg font-bold mt-10">스쿱 에디터's 추천</div>
      <div className="mb-10 w-11/12 mx-auto mt-3 grid grid-cols-2 gap-4">
        <ScoopWebtoonCard webtoon={webtoon} />
        <ScoopWebtoonCard webtoon={webtoon} />
      </div>  

      <div className="w-11/12 mx-auto text-lg font-bold mt-10">뉴스레터 받기</div>
      <div className="w-11/12 mx-auto text-xs text-gray-800 mt-3">매주 1회 에디터가 엄선한 웹툰, 웹소설을 이메일로 보내드려요.</div>
      <form className="" onSubmit={handleSubmit(onSubmit, inValid)}>
        <div className="w-11/12 mx-auto">
          <input 
            {...register("name", {
              required: "이메일을 입력해주세요",
              // validate: (name) => name.includes("gmail.com")
            })}
            type="name" 
            name="name" 
            required 
            className="w-full mx-auto border-2 border-gray-300 mt-5 py-2 px-2 rounded-md text-sm text-gray-800"
            placeholder="이름을 입력하세요" 
          />
        </div>
        <div className="w-11/12 mx-auto">
          <input 
            {...register("email", {
              required: "비밀번호를 입력해주세요",
              // validate: (email) => email.includes("gmail.com")
            })}
            type="email" 
            name="email" 
            required 
            className="w-full mx-auto border-2 border-gray-300 mt-3 py-2 px-2 rounded-md text-sm text-gray-800"
            placeholder="이메일을 입력하세요" 
          />
          <div className="rounded-3xl bg-red-500 p-2 mt-5 text-center text-white mx-auto md:hidden"><Link to={'/recommend'}>뉴스레터 구독하기</Link></div>
        </div>
      </form>

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
      <div className="w-11/12 mx-auto mt-3 grid grid-cols-2 gap-4">
        <ScoopWebtoonCard webtoon={webtoon} />
        <ScoopWebtoonCard webtoon={webtoon} />
      </div>   

      <div className="w-11/12 mx-auto text-lg font-bold mt-10">스쿠퍼가 되고 싶나요?</div>
      <div className="w-11/12 mx-auto text-xs text-gray-800 mt-2 ">웹툰을 추천하는 스쿠퍼가 되면 리워드를 드립니다.</div>
      <div className="w-11/12 rounded-3xl bg-red-500 p-2 mt-5 mb-24 text-center text-white mx-auto md:hidden"><Link to={'/recommend'}>뉴스레터 구독하기</Link></div>

      <ScoopFooter />
    </div>
  )
}
