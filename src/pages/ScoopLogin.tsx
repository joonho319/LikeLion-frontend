import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ScoopFooter } from '../components/ScoopFooter';
import { ScoopHeader } from '../components/ScoopHeader';


interface IForm {
  password: string;
  email: string;
}

export const ScoopLogin = () => {
  const { register, getValues, handleSubmit, formState: { errors } } = useForm<IForm>();

  const onSubmit = () => {
    const { email, password } = getValues();
    console.log(email, password, "df")
  }
  const inValid = () => {
    console.log(errors)
  }
  return (
    <div className="">
      <ScoopHeader title={'SCOOP'} />
      <div className="lg:max-w-md mx-auto mt-20">

        <div className="text-2xl font-bold mt-6 grid justify-center">
          <div>로그인</div>
        </div>
        <div className="text-base grid justify-center mt-3">스쿱과 함께 일상의 새로움을</div>
        <div className="text-base grid justify-center">콘텐츠로 경험해보세요.</div>
        
        <form className="" onSubmit={handleSubmit(onSubmit, inValid)}>
          <div className="w-11/12 mx-auto">
            <input 
              {...register("email", {
                required: "이메일을 입력해주세요",
                // validate: (email) => email.includes("gmail.com")
              })}
              type="email" 
              name="email" 
              required 
              className="w-full mx-auto border-2 border-gray-300 mt-5 py-2 px-2 rounded-md text-sm text-gray-700"
              placeholder="이메일을 입력하세요" 
            />
          </div>
          <div className="w-11/12 mx-auto">
            <input 
              {...register("password", {
                required: "비밀번호을 입력해주세요",
                // validate: (password) => password.includes("gmail.com")
              })}
              type="password" 
              name="password" 
              required 
              className="w-full mx-auto border-2 border-gray-300 mt-5 py-2 px-2 rounded-md text-sm text-gray-700"
              placeholder="비밀번호를 입력하세요" 
            />
          </div>
          
          <div className="w-11/12 mx-auto">
            <button className="w-full mx-auto bg-gray-600 px-5 py-3 mt-5 text-white rounded-md ">로그인</button>
          </div>
        </form>
        <div className="text-sm text-blue-500 underline text-center mt-4"><Link to={'/signup'}>아직 스쿱 회원이 아니신가요?</Link></div>
      </div>
      

      <ScoopFooter />
    </div>
  )
}
