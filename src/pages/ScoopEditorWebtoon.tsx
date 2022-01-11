import { ScoopScooperCard } from '../components/ScoopScooperCard';
import { ScoopFooter } from '../components/ScoopFooter';
import { ScoopHeader } from '../components/ScoopHeader';
import { ScoopSubHeader } from '../components/ScoopSubHeader';
import { ScoopScooperWebtoonCard } from '../components/ScoopScooperWebtoonCard';
import { ScoopDesktopFooter } from '../components/ScoopDesktopFooter';
import { useForm } from 'react-hook-form';
import {  VanillaRecommendVar, MintchoRecommendVar } from '../apollo';
import { ScoopAuthorCard } from '../components/ScoopAuthorCard';
import {author} from './scoopmain';
import { ScoopEditorWebtoonCard } from '../components/ScoopEditorWebtoonCard';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { getVanillaRecommend } from '../__generated__/getVanillaRecommend';
import { getMintchoRecommend } from '../__generated__/getMintchoRecommend';
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

export const GET_VANILLA_RECOMMEND_QUERY = gql`
  query getVanillaRecommend {
    getVanillaRecommend { 
      ok
      editorRecommend {
        id
        name
        title
        thumbnail
        html
      }
    }
  }
`;

export const GET_MINTCHO_RECOMMEND_QUERY = gql`
  query getMintchoRecommend {
    getMintchoRecommend { 
      ok
      editorRecommend {
        id
        name
        title
        thumbnail
        html
      }
    }
  }
`;

interface IForm {
  name: string;
  email: string;
}

export const ScoopEditorWebtoon = () => {
  const { register, getValues, handleSubmit, formState: { errors } } = useForm<IForm>();

  const onvanillaRecommendCompleted = (data: any) => {
    const {
      getVanillaRecommend: { ok, editorRecommend },
    } = data;
    if (ok && editorRecommend) {

      VanillaRecommendVar(editorRecommend);
      localStorage.setItem('VanillaRecommend', JSON.stringify(editorRecommend));

    }
  };

  const onmintchoRecommendCompleted = (data: any) => {
    const {
      getMintchoRecommend: { ok, editorRecommend },
    } = data;
    if (ok && editorRecommend) {

      MintchoRecommendVar(editorRecommend);
      localStorage.setItem('MintchoRecommend', JSON.stringify(editorRecommend));

    }
  };
  const { data: vanillaRecommendData, loading: vanillaLoading } = useQuery<getVanillaRecommend>(GET_VANILLA_RECOMMEND_QUERY, { onCompleted: onvanillaRecommendCompleted});
  const { data: mintchoRecommendData, loading: mintchoLoading } = useQuery<getMintchoRecommend>(GET_MINTCHO_RECOMMEND_QUERY, { onCompleted: onmintchoRecommendCompleted});
  const MintchoRecommends = localStorage.getItem('MintchoRecommend');
  const VanillaRecommends = localStorage.getItem('VanillaRecommend');

  const onSubmit = () => {
    const { email, name } = getValues();
    console.log(email, name, "df")
  }
  const inValid = () => {
    console.log(errors)
  }

  return (
    <div className="mx-auto">
      {/* <ScoopHeader title={'에디터 추천'} /> */}
      <ScoopSubHeader />

      {/* 모바일 */}
      <div className="w-11/12 mx-auto lg:hidden">
        <div className="text-lg font-bold mt-7">스쿠퍼 in 스쿱하우스</div>
        <ScoopAuthorCard authors={author} />
        {/* <div className="mb-10 mt-5 grid grid-cols-4 gap-4">
          <ScoopScooperCard scooper={scooper1} />
          <ScoopScooperCard scooper={scooper2} />
          <ScoopScooperCard scooper={scooper3} />
          <ScoopScooperCard scooper={scooper4} />
        </div>  */}

        <div className="grid grid-cols-2 mt-5 ">
          <div className="text-lg font-bold">
            바닐라's 추천
          </div>
          <div className="grid justify-end text-sm pr-2 ">
            더보기 {'>'}
          </div>
        </div>
        {VanillaRecommends && <ScoopEditorWebtoonCard webtoons={JSON.parse(VanillaRecommends)} />}
        {/* <div className="mb-10 mt-3 grid grid-cols-2 gap-4">
          <ScoopScooperWebtoonCard webtoon={webtoon1} />
          <ScoopScooperWebtoonCard webtoon={webtoon2} />
          <ScoopScooperWebtoonCard webtoon={webtoon1} />
          <ScoopScooperWebtoonCard webtoon={webtoon2} />
        </div>  */}

        <div className="grid grid-cols-2 mt-5 ">
          <div className="text-lg font-bold">
            민트초코's 추천
          </div>
          <div className="grid justify-end text-sm pr-2 ">
            더보기 {'>'}
          </div>
        </div>
        {MintchoRecommends && <ScoopEditorWebtoonCard webtoons={JSON.parse(MintchoRecommends)} />}
        {/* <div className="mb-20 mt-3 grid grid-cols-2 gap-4 ">
          <ScoopScooperWebtoonCard webtoon={webtoon1} />
          <ScoopScooperWebtoonCard webtoon={webtoon2} />
          <ScoopScooperWebtoonCard webtoon={webtoon1} />
          <ScoopScooperWebtoonCard webtoon={webtoon2} />
        </div>   */}

      </div>

      {/* 데스크탑 */}
      <div className=" mx-auto hidden lg:grid" style={{width:"1100px"}}>
        <div className="flex flex-col justify-center text-4xl mt-10  ">
          <div className="grid justify-center font-extrabold">스쿱이 추천하는</div>
          <div className="grid justify-center mt-3 font-extrabold">오늘의 웹툰</div>
          <div className="grid justify-center mt-10 text-xl font-normal text-gray-600">우리가 떠 먹여 드릴게요.</div>
        </div>
        <div className="text-2xl font-bold mt-7">스쿠퍼 in 스쿱하우스</div>
        <div className="mb-10 mt-8 grid grid-cols-8 gap-4">
          <ScoopScooperCard scooper={scooper1} />
          <ScoopScooperCard scooper={scooper2} />
          <ScoopScooperCard scooper={scooper3} />
          <ScoopScooperCard scooper={scooper4} />
          <ScoopScooperCard scooper={scooper4} />
          <ScoopScooperCard scooper={scooper4} />
          <ScoopScooperCard scooper={scooper4} />
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
        <div className="mb-10 mt-3 grid grid-cols-4 gap-4">
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
        <div className="mb-20 mt-3 grid grid-cols-4 gap-4 ">
          <ScoopScooperWebtoonCard webtoon={webtoon1} />
          <ScoopScooperWebtoonCard webtoon={webtoon2} />
          <ScoopScooperWebtoonCard webtoon={webtoon1} />
          <ScoopScooperWebtoonCard webtoon={webtoon2} />
        </div>  


        <div className="text-2xl font-bold">뉴스레터를 받아보세요.</div>
        <div className="text-xl mt-3 ">매주 1회 에디터가 엄선한 웹툰, 웹소설을 이메일로 보내드려요.</div>
        <form className="mt-5" onSubmit={handleSubmit(onSubmit, inValid)}>
          <div className=" mx-auto">
            <input 
              {...register("name", {
                required: "이메일을 입력해주세요",
                // validate: (name) => name.includes("gmail.com")
              })}
              type="name" 
              name="name" 
              required 
              className="w-full mx-auto border-2 border-gray-300 mt-7 py-2 px-2 rounded-md text-base text-gray-900"
              placeholder="이름을 입력하세요" 
            />
          </div>
          <div className="mx-auto">
            <input 
              {...register("email", {
                required: "비밀번호를 입력해주세요",
                // validate: (email) => email.includes("gmail.com")
              })}
              type="email" 
              name="email" 
              required 
              className="w-full mx-auto border-2 border-gray-300 mt-5 py-2 px-2 rounded-md text-base text-gray-900"
              placeholder="이메일을 입력하세요" 
            />
          </div>
          <div className="mx-auto mb-20">
            <button className="w-full mx-auto bg-red-500 px-5 py-3 mt-5 text-white rounded-full ">뉴스레터 구독하기</button>
          </div>
        </form>

      </div>
      <ScoopDesktopFooter />
      <ScoopFooter />
      
    </div>
  )
}
