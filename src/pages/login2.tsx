import logo from '../images/추천서로고.png';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import kakaoLogin from '../images/kakao_login.jpeg';
import naverLogin from '../images/naver_login.jpeg';
import { Helmet} from 'react-helmet-async';
import gql from 'graphql-tag';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { loginMutation, loginMutationVariables } from '../__generated__/loginMutation';
import { isLoggedInVar, authTokenVar} from '../apollo';
import { LOCALSTORAGE_TOKEN } from '../constant';

const LOGIN_MUTATION = gql`
  mutation loginMutation($loginInput: LoginInput!) {
    login(input: $loginInput) {
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
  email: string;
  password: string;
}

export const Login2 = () => {
  const history = useHistory();
  const { register, getValues, handleSubmit, formState: { errors } } = useForm<IForm>();
  const onCompleted = (data: loginMutation) => {
    const {
      login: { ok, token, user, error },
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
  const [ loginMutation, { data: loginMutationResult, loading } ] = useMutation<loginMutation, loginMutationVariables>(LOGIN_MUTATION, { onCompleted});
  const onSubmit = () => {
    if(!loading) {
      const { email, password } = getValues();
      loginMutation({
        variables: {
          loginInput: {
            email,
            password,
          }
        }
      });
    }
  }
  const inValid = () => {
    console.log(errors)
  }
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* <Link to={'/'}><img src={logo}  className="mx-auto h-12 w-auto mb-24"/></Link> */}
       
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">로그인</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit, inValid)}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                이메일
              </label>
              <div className="mt-1">
                <input
                  {...register("email", {
                    required: "이메일을 입력해주세요",
                    minLength: 10,
                    validate: (email) =>email.includes("@")
                  })}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                비밀번호
              </label>
              <div className="mt-1">
                <input
                  {...register("password", {
                    required: "비밀번호를 입력해주세요"
                  })}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            {loginMutationResult?.login.error && <div className="text-red-500 text-sm">{loginMutationResult.login.error}</div>}   
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  아이디 저장
                </label>
              </div>

              <div className="text-sm">
                <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                  회원가입
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {loading ? '로그인 중' : '로그인'}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              {/* <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">또는</span>
              </div> */}
            </div>

            {/* <div className="mt-5 grid grid-cols-1 gap-3">
              <button className="mt-2"><img src={kakaoLogin} className="rounded-md w-full h-12"></img></button>
              <button className="mt-2"><img src={naverLogin} className="rounded-md w-full h-12"></img></button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
