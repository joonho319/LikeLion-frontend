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
import { ScoopDesktopAuthorYoutubeCard } from '../components/ScoopDesktopAuthorYoutubeCard';
import { ScoopDesktopFooter } from '../components/ScoopDesktopFooter';
import Webtoon from '../images/독립일기.png';
import YoutubeImage from '../images/play.png';

interface IForm {
  name: string;
  email: string;
}

const categories = [
  {
    name: 'New Arrivals',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg',
  },
  {
    name: 'Productivity',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg',
  },
  {
    name: 'Workspace',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg',
  },
  {
    name: 'Accessories',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg',
  },
  { name: 'Sale', href: '#', imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg' },
]

const webtoons = [
  {
    title: '대학일기',
    author: '자까',
    platform: '네이버 웹툰',
    image: Webtoon
  },
  {
    title: '대학일기',
    author: '자까',
    platform: '네이버 웹툰',
    image: Webtoon
  },
  {
    title: '대학일기',
    author: '자까',
    platform: '네이버 웹툰',
    image: Webtoon
  },
  {
    title: '대학일기',
    author: '자까',
    platform: '네이버 웹툰',
    image: Webtoon
  },
  {
    title: '대학일기',
    author: '자까',
    platform: '네이버 웹툰',
    image: Webtoon
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
const youtube = [
  {
    src: '',
    title: '[인생84] EP.1 새로운 출발',
    author: '인생84',
    image: YoutubeImage
  },
  {
    src: '',
    title: '[인생84] EP.2 새로운 출발',
    author: '인생84',
    image: YoutubeImage
  },
  {
    src: '',
    title: '[인생84] EP.3 새로운 출발',
    author: '인생84',
    image: YoutubeImage
  },
  {
    src: '',
    title: '[인생84] EP.4 새로운 출발',
    author: '인생84',
    image: YoutubeImage
  },
]


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
      <div className="text-2xl font-bold mt-8 grid justify-center lg:hidden">
        <div>나에게 맞는 웹툰을</div>
        <div>AI가 추천해드려요.</div>
      </div>
      <div className="mt-8 lg:hidden" style={{backgroundImage: `url(${ScoopImage})`, backgroundSize: '100% 100%', backgroundRepeat:"no-repeat", height:"250px"}}> </div>
      <div className="text-md text-gray-700 mt-9 grid justify-center lg:hidden">'오늘은 뭐보지?' '볼 게 없네.'라고 생각했던</div>
      <div className="text-md text-gray-700  grid justify-center lg:hidden">분들에게 스쿱하우스가 찾아드립니다.</div>
      <div className="rounded-3xl bg-red-500 p-2 mt-9 text-center text-white w-11/12 mx-auto lg:hidden"><Link to={'/recommend'}>웹툰 추천받기</Link></div>
      
      <div className="">

        <section aria-labelledby="category-heading" className="pt-12 xl:max-w-7xl xl:mx-auto xl:px-8">
          <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
            <h2 id="category-heading" className="text-xl font-extrabold tracking-tight text-gray-900">
              스쿱 에디터's 추천
            </h2>
          </div>
        </section>
        <ScoopWebtoonCard webtoons={webtoons} />
        {/* <ScoopWebtoonCard webtoons={webtoons} /> */}

        <div className="block w-11/12 mx-auto text-lg font-bold mt-10">뉴스레터 받기</div>
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
            <div className="rounded-3xl bg-red-500 p-2 mt-5 text-center text-white mx-auto lg:hidden"><Link to={'/recommend'}>뉴스레터 구독하기</Link></div>
          </div>
        </form>

        <div className="w-11/12 mx-auto text-lg font-bold mt-14">웹툰 작가가 궁금해요?</div>
        <div className="mb-10 w-11/12 mx-auto mt-5 grid grid-cols-3 gap-4">
          <ScoopAuthorCard author={author} />
          <ScoopAuthorCard author={author} />
          <ScoopAuthorCard author={author} />
        </div> 

        {/* 이번주 추천 작품 */}
        <section aria-labelledby="category-heading" className="pt-12 xl:max-w-7xl xl:mx-auto xl:px-8">
          <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
            <h2 id="category-heading" className="text-xl font-extrabold tracking-tight text-gray-900">
              이번주에 추천된 작품이에요.
            </h2>
          </div>
        </section>
        <ScoopWebtoonCard webtoons={webtoons} />
    
        {/* 유튜브 작품 모음 */}
        <ScoopAuthorYoutubeCard youtubes={youtube} />

        {/* AI추천 모음 */}
        <section aria-labelledby="category-heading" className="pt-12 xl:max-w-7xl xl:mx-auto xl:px-8">
          <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
            <h2 id="category-heading" className="text-xl font-extrabold tracking-tight text-gray-900">
              AI가 제 멋대로 추천해봐요.
            </h2>
          </div>
        </section>
        <ScoopWebtoonCard webtoons={webtoons} />

        <div className="w-11/12 mx-auto text-lg font-bold mt-10">스쿠퍼가 되고 싶나요?</div>
        <div className="w-11/12 mx-auto text-xs text-gray-800 mt-2 ">웹툰을 추천하는 스쿠퍼가 되면 리워드를 드립니다.</div>
        <div className="w-11/12 rounded-3xl bg-red-500 p-2 mt-5 mb-24 text-center text-white mx-auto lg:hidden"><Link to={'/recommend'}>뉴스레터 구독하기</Link></div>

        <ScoopFooter />
      </div>

      {/* 데스크탑 */}
      {/* <div className="hidden lg:flex ">
        <div className="lg:flex-1"></div>
        <div className="lg:flex-shrink-0">
          <div className="flex">
            <div className="mt-8" style={{backgroundImage: `url(${ScoopImage})`, backgroundSize: '100%', backgroundRepeat:"no-repeat", height:"600px", width:"650px"}}> </div>
            <div className="text-2xl font-bold mt-8  ml-10" style={{ width: "450px"}}>
              <div className="mt-10 lg:text-3xl ">나에게 맞는 웹툰을</div>
              <div className="lg:text-3xl  mt-3">AI가 추천해드려요.</div>
              <div className="lg:text-base text-gray-700 mt-12 ">'오늘은 뭐보지?' '볼 게 없네.'라고 생각했던 분들에게</div>
              <div className="lg:text-base text-gray-700  "> 스쿱하우스가 찾아드립니다.</div>
              <div className="rounded-3xl bg-red-500 p-2 mt-9 mr-32 text-center text-white text-base"><Link to={'/recommend'}>웹툰 추천받기</Link></div>
            </div>
          </div>
          <div className="flex-shrink-0 text-2xl font-bold hidden lg:inline-block">스쿱 에디터's 추천</div>
          
          <ScoopWebtoonCard webtoons={webtoons}/>
          <div className=" text-2xl font-bold hidden lg:inline-block">웹툰 작가가 궁금해요</div>
          <div className="mb-10 col-span-8 grid grid-cols-6 gap-4">
            <ScoopAuthorCard author={author} />
            <ScoopAuthorCard author={author} />
            <ScoopAuthorCard author={author} />
            <ScoopAuthorCard author={author} />
            <ScoopAuthorCard author={author} />
            <ScoopAuthorCard author={author} />
          </div> 
          <div className="mx-auto text-2xl font-bold mt-10">뉴스레터 받기</div>
        <div className="mx-auto text-xs text-gray-800 mt-3">매주 1회 에디터가 엄선한 웹툰, 웹소설을 이메일로 보내드려요.</div>
        <form className="" onSubmit={handleSubmit(onSubmit, inValid)}>
          <div className="mx-auto">
            <input 
              {...register("name", {
                required: "이메일을 입력해주세요",
              })}
              type="name" 
              name="name" 
              required 
              className="w-full mx-auto border-2 border-gray-300 mt-5 py-2 px-2 rounded-md text-sm text-gray-800"
              placeholder="이름을 입력하세요" 
            />
          </div>
          <div className="mx-auto">
            <input 
              {...register("email", {
                required: "비밀번호를 입력해주세요",
              })}
              type="email" 
              name="email" 
              required 
              className="w-full mx-auto border-2 border-gray-300 mt-3 py-2 px-2 rounded-md text-sm text-gray-800"
              placeholder="이메일을 입력하세요" 
            />
            <div className="rounded-3xl bg-red-500 p-2 mt-5 text-center text-white mx-auto "><Link to={'/recommend'}>뉴스레터 구독하기</Link></div>
          </div>
          <div className="mx-auto text-2xl font-bold mt-20 mb-5">이번 주에 추천된 작품이에요</div>
          <ScoopWebtoonCard webtoons={webtoons}/>

          <div className="mx-auto text-2xl font-bold mt-20">웹툰 작가 유튜부 모음</div>
          <div className="mb-10 mx-auto mt-3 grid grid-cols-4 gap-4">
            <ScoopDesktopAuthorYoutubeCard Youtube={youtube} />
            <ScoopDesktopAuthorYoutubeCard Youtube={youtube} />
            <ScoopDesktopAuthorYoutubeCard Youtube={youtube} />
            <ScoopDesktopAuthorYoutubeCard Youtube={youtube} />
          </div>  

          <div className="mx-auto text-2xl font-bold mt-20 mb-5">AI가 제멋대로 추천해봐요</div>
          <ScoopWebtoonCard webtoons={webtoons}/>

          <div className="mx-auto text-2xl font-bold mt-10">스쿠퍼가 되고 싶나요?</div>
          <div className="mx-auto text-lg text-gray-800 mt-2 ">웹툰을 추천하는 스쿠퍼가 되면 리워드를 드립니다.</div>
          <div className="rounded-3xl bg-red-500 p-3 mt-5 mb-24 text-center text-white mx-auto "><Link to={'/recommend'}>스쿠퍼 신청하기</Link></div>
          </form>

        </div>
        <div className="flex-1"></div>


        
      </div> */}
      <div className="hidden lg:grid">
        
        

      </div>
      <ScoopDesktopFooter />

      
    </div>
  )
}
