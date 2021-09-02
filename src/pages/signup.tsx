import React from 'react';
import { gql, useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form';
import loginImage from '../images/login_img_02.jpg';
import logo from '../images/추천서로고.png';
import kakaoLogin from '../images/kakao_login.jpeg';
import naverLogin from '../images/naver_login.jpeg';
import { signupMutation, signupMutationVariables } from '../__generated__/signupMutation';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

// const SIGNUP_MUTATION = gql`
//   mutation signupMutation($email: String!, $password: String!, $name: String!) {
//     createAccount(input: {
//       email: $email,
//       password: $password,
//       name: $name,
//     }) {
//       ok,
//       error
//     } 
//   }
// `;

// interface IForm {
//   email: string;
//   password: string;
//   name: string;
// }

export const SignUp = () => {
  // const { register, getValues, handleSubmit, formState: { errors } } = useForm<IForm>();
  // const history = useHistory();
  // const onCompleted = (data: signupMutation) => {
  //   const {
  //     signup: { ok },
  //   } = data;
  //   if (ok) {
  //     alert("Account Created! Log in now!");
  //     history.push("/");
  //   }
  // };
  // const [signupMutation, { loading, data: createAccountMutationResult }] 
  //   = useMutation<signupMutation,signupMutationVariables>(
  //     SIGNUP_MUTATION, 
  //     { onCompleted});
  
  // const onSubmit = () => {
  //   const { email,name, password } = getValues();
  //   console.log(name)
  //   signupMutation({
  //     variables: {
  //       email,
  //       password,
  //       name
  //     }
  //   });
  //   console.log("d")
  // }
  // const inValid = () => {
  //   console.log(errors)
  // }
  return (
    <div className="grid grid-cols-2">
      {/* <div className="col-span-1">
        <img src={loginImage} className="h-screen" alt="login Image" />
      </div>
      <div className="col-span-1 grid grid-cols-6 w-full h-screen justify-center max-w-screen-lg">
        <form className="col-start-3 col-end-5 mt-40 flex flex-col" onSubmit={handleSubmit(onSubmit, inValid)}>
          <div className="mb-14 text-2xl flex justify-center">회원가입</div>
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
              {...register("name", {
                required: "이름을 입력해주세요",
                // validate: (email) =>email.includes("gmail.com")
              })}
              type="name" 
              name="name" 
              required 
              className="min-w-full border-b-2 my-4"
              placeholder="이름" />
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
            <input 
              {...register("password", {
                required: "비밀번호를 다시 입력해주세요",
                minLength: 10,
                // validate: (email) =>email.includes("gmail.com")
              })}
              type="password" 
              name="password" 
              required 
              className="min-w-full border-b-2 my-4"
              placeholder="비밀번호확인" 
            />
          <button className="bg-blue-700 px-5 py-3 mt-4 text-white ">회원가입</button>    
          <button className="mt-4"><img src={kakaoLogin}></img></button>
          <button className="mt-4"><img src={naverLogin}></img></button>
        </form>
        <div className="col-start-5">
          <Link to={'/'}><img src={logo}  className="mt-24 w-24"/></Link>
        </div>
      </div> */}
    </div>
  )
}
