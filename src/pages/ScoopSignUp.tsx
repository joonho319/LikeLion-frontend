import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { authTokenVar, isLoggedInVar } from '../apollo';
import { ScoopFooter } from '../components/ScoopFooter';
import { ScoopHeader } from '../components/ScoopHeader';
import { LOCALSTORAGE_TOKEN } from '../constant';
import { createAccountMutation, createAccountMutationVariables } from '../__generated__/createAccountMutation';

export const CREATEACCOUNT_MUTATION = gql`
  mutation createAccountMutation($email: String!, $password: String!, $name: String!) {
    createAccount(input: {
      email: $email,
      password: $password,
      name: $name,
    }) {
      ok,
      token,
      user {
        role
        email
        name
      },
      error
    } 
  }
`;

interface IForm {
  password: string;
  email: string;
  passwordcheck: string;
  name: string;
  // birth: string;
}

export const ScoopSignUp = () => {
  const history = useHistory();
  const [ passwordsamecheck, setPasswordsamecheck ] = useState(true);
  const { register, getValues, handleSubmit, formState: { errors } } = useForm<IForm>();

  const onSubmit = () => {
    const { email,name, password, passwordcheck } = getValues();
    if(password !== passwordcheck) {
      setPasswordsamecheck(false);
      return;
    }
    createAccountMutation({
      variables: {
        email,
        password,
        name
      }
    });
  }
  const inValid = () => {
    console.log(errors)
  }
  const onCompleted = (data: createAccountMutation) => {
    const {
      createAccount: { ok, token, user, error },
    } = data;
    if (ok && token) {
      localStorage.setItem(LOCALSTORAGE_TOKEN, token);
      localStorage.setItem('role', String(user?.role))
      localStorage.setItem('email', String(user?.email))
      localStorage.setItem('name', String(user?.name))
      authTokenVar(token);
      isLoggedInVar(true);
      history.push('/')
    } 
  };
  const [createAccountMutation, { loading, data: createAccountMutationResult }] 
    = useMutation<createAccountMutation, createAccountMutationVariables>(
      CREATEACCOUNT_MUTATION, 
      { onCompleted});
  return (
    <div>

      <ScoopHeader title={'SCOOP'} />
      <div className="lg:max-w-md mx-auto mt-20">
        <div className="text-2xl font-bold mt-6 grid justify-center">
          <div>회원가입</div>
        </div>
        <div className="text-base grid justify-center mt-3">스쿱과 함께 일상의 새로움을</div>
        <div className="text-base grid justify-center">콘텐츠로 경험해보세요.</div>
        
        <form className="" onSubmit={handleSubmit(onSubmit, inValid)}>
          <div className="w-11/12 mx-auto">
            <input 
              {...register("name", {
                required: "이름을 입력해주세요",
                // validate: (email) => email.includes("gmail.com")
              })}
              type="name" 
              name="name" 
              required 
              className="w-full mx-auto border-2 border-gray-300 mt-5 py-2 px-2 rounded-md text-sm text-gray-700"
              placeholder="이름을 입력하세요" 
            />
          </div>
          {/* <div className="w-11/12 mx-auto">
            <input 
              {...register("birth", {
                required: "생년월일을 입력해주세요",
                // validate: (email) => email.includes("gmail.com")
              })}
              type="birth" 
              name="birth" 
              required 
              className="w-full mx-auto border-2 border-gray-300 mt-4 py-2 px-2 rounded-md text-sm text-gray-700"
              placeholder="생년월일을 입력하세요" 
            />
          </div> */}
          <div className="w-11/12 mx-auto">
            <input 
              {...register("email", {
                required: "이메일을 입력해주세요",
                // validate: (email) => email.includes("gmail.com")
              })}
              type="email" 
              name="email" 
              required 
              className="w-full mx-auto border-2 border-gray-300 mt-4 py-2 px-2 rounded-md text-sm text-gray-700"
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
              className="w-full mx-auto border-2 border-gray-300 mt-4 py-2 px-2 rounded-md text-sm text-gray-700"
              placeholder="비밀번호를 입력하세요" 
            />
          </div>
          <div className="w-11/12 mx-auto">
            <input 
              {...register("passwordcheck", {
                required: "비밀번호을 재입력해주세요",
                // validate: (password) => password.includes("gmail.com")
              })}
              type="password" 
              name="passwordcheck" 
              required 
              className="w-full mx-auto border-2 border-gray-300 mt-4 py-2 px-2 rounded-md text-sm text-gray-700"
              placeholder="비밀번호를 재입력하세요" 
            />
          </div>
          
          <div className="w-11/12 mx-auto">
            <button className="w-full mx-auto bg-gray-600 px-5 py-3 mt-4 text-white rounded-md ">회원가입</button>
          </div>
        </form>
      <div className="text-sm text-blue-500 underline text-center mt-4"><Link to={'/login'}>로그인하러 가기</Link></div>
    </div>
      

      <ScoopFooter />
    </div>
  )
}
