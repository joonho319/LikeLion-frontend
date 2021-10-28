import { useForm } from 'react-hook-form';
import { ScoopAuthorCard } from '../components/ScoopAuthorCard';
import { ScoopAuthorYoutubeCard } from '../components/ScoopAuthorYoutubeCard';
import { ScoopFooter } from '../components/ScoopFooter';
import { ScoopSubHeader } from '../components/ScoopSubHeader';
import { ScoopWebtoonCarousel } from '../components/ScoopWebtoonCaoursel';
import { ScoopWebtoonCard } from '../components/ScoopWebtoonCard';
import ScoopImage from '../images/scoopImage.png';

interface IForm {
  name: string;
  email: string;
}

export const ScoopNewsLetter = () => {
  const { register, getValues, handleSubmit, formState: { errors } } = useForm<IForm>();

  const onSubmit = () => {
    const { email, name } = getValues();
    console.log(email, name, "df")
  }
  const inValid = () => {
    console.log(errors)
  }

  return (
    <div className="mx-auto">
      <ScoopSubHeader />
      
      <div className="text-2xl font-bold mt-5 grid justify-center">뉴스레터</div>
      <div className="mt-3 text-md grid justify-center">매주 1회 에디터가 엄선한</div>
      <div className="text-md grid justify-center">웹툰, 웹소설을 이메일로 보내드려요.</div>
      
      <form className="" onSubmit={handleSubmit(onSubmit, inValid)}>
        <div className="w-11/12 md:w-4/12 mx-auto">
          <input 
            {...register("name", {
              required: "이메일을 입력해주세요",
              // validate: (name) => name.includes("gmail.com")
            })}
            type="name" 
            name="name" 
            required 
            className="w-full mx-auto border-2 border-gray-300 mt-7 py-2 px-2 rounded-md text-sm text-gray-700"
            placeholder="이름을 입력하세요" 
          />
        </div>
        <div className="w-11/12 md:w-4/12  mx-auto">
          <input 
            {...register("email", {
              required: "비밀번호를 입력해주세요",
              // validate: (email) => email.includes("gmail.com")
            })}
            type="email" 
            name="email" 
            required 
            className="w-full mx-auto border-2 border-gray-300 mt-5 py-2 px-2 rounded-md text-sm text-gray-700"
            placeholder="이메일을 입력하세요" 
          />
        </div>
        <div className="w-11/12 md:w-4/12  mx-auto">
          <button className="w-full mx-auto bg-gray-600 px-5 py-3 mt-5 text-white rounded-md ">뉴스레터 구독하기</button>
        </div>
      </form>
      <ScoopFooter />
    </div>
  )
}
