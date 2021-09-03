import React from 'react';
import { gql, useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form';
import loginImage from '../images/login_img_02.jpg';
import logo from '../images/추천서로고.png';
import kakaoLogin from '../images/kakao_login.jpeg';
import naverLogin from '../images/naver_login.jpeg';
import { Link } from 'react-router-dom';

// const LOGIN_MUTATION = gql`
//   mutation loginMutation($email: String!, $password: String!) {
//     login(input: {
//       email: $email,
//       password: $password
//     }) {
//       ok,
//       token,
//       error
//     }
//   }
// `;

interface IForm {
  email: string;
  password: string;
}

export const Login = () => {
  const { register, getValues, handleSubmit, formState: { errors } } = useForm<IForm>();
  // const [loginMutation] = useMutation<loginMutation,loginMutationVariables>(LOGIN_MUTATION);
  
  const onSubmit = () => {
    const { email, password } = getValues();
    // loginMutation({
    //   variables: {
    //     email,
    //     password
    //   }
    // })
  }
  const inValid = () => {
    console.log(errors)
  }
  return (
    <div className="grid grid-cols-2">
      {/* <h1>로그인</h1> */}
      <div className="col-span-1">
        <img src={loginImage} className="h-screen" alt="login Image" />
      </div>
      <div className="col-span-1 grid grid-cols-6 w-full h-screen justify-center max-w-screen-lg">
        <form className="col-start-3 col-end-5 mt-40 flex flex-col" onSubmit={handleSubmit(onSubmit, inValid)}>
          <div className="mb-14 text-2xl flex justify-center">로그인</div>
            <input 
              {...register("email", {
                required: "이메일을 입력해주세요",
                minLength: 10,
                // validate: (email) =>email.includes("gmail.com")
              })}
              type="email" 
              name="email" 
              required 
              className="min-w-full border-b-2 my-4"
              placeholder="아이디" />
            <input 
              {...register("password", {
                required: "비밀번호를 입력해주세요",
                minLength: 10,
                // validate: (email) =>email.includes("gmail.com")
              })}
              type="password" 
              name="password" 
              required 
              className="min-w-full border-b-2 my-4"
              placeholder="비밀번호" 
            />
          <button className="mt-4"><img src={kakaoLogin}></img></button>
          <button className="mt-4"><img src={naverLogin}></img></button>
          <button className="bg-blue-700 px-5 py-3 mt-4 text-white ">로그인</button>
          <div className="mt-6 flex items-center">
              <div><input className="mr-1" type="checkbox" /></div>
              <div className="text-sm inline-block text-gray-500">아이디저장</div>
              <div><input className="ml-2 mr-1" type="checkbox" /></div>
              <div className="text-sm inline-block text-gray-500 mr-10">자동로그인</div>
              <div className="text-sm text-gray-500">비밀번호찾기</div>
          </div>
          <div className="text-sm text-gray-500 flex justify-center mt-44">
            아직 추천서 회원이 아니신가요? <Link to={'/signup'} className="font-bold text-blue-700 underline ml-2">회원가입</Link>
          </div>
          
        </form>
        <div className="col-start-5">
          <Link to={'/'}><img src={logo}  className="mt-24 w-24"/></Link>
        </div>
      </div>
    </div>
  )
}
