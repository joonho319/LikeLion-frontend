import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/추천서로고.png';


export const Header = () =>{
  return (
    <>
      {window.location.pathname === '/' ? 
        <>
          <div>
            <div className="w-screen">
            {/* <Link to={'/'} className="text-white text-3xl pl-8 pt-9 w-48 inline-block">추천서</Link> */}
            <Link to={'/'}><img src={Logo} className="ml-40 pt-8 w-40 inline-block" alt="logo image" /></Link>
            <Link to={'/signup'}><div className="inline-block float-right pr-40 pt-11 text-white">회원가입</div></Link>
            <Link to={'/login'}><div className="inline-block float-right px-7 pt-11 text-white">로그인</div></Link>
            </div>
            <div className="">
              <Link to={'/service'}><div className="inline-block pl-44 pt-3 pb-2 text-white">서비스 소개</div></Link>
              <Link to={'/reference'}><div className="inline-block pl-7 pt-3 pb-2 text-white">평판조회</div></Link>
              <Link to={'/sample'}><div className="inline-block pl-7 pt-3 pb-2 text-white">평판데이터</div></Link>
            </div>
          </div> 
        </> :
        <>
          <div>
            <div className="w-screen">
            <Link to={'/'}><img src={Logo} className="ml-40 pt-8 w-40 inline-block" alt="logo image" /></Link>
            <Link to={'/signup'}><div className="inline-block float-right pr-40 pt-11 text-black">회원가입</div></Link>
            <Link to={'/login'}><div className="inline-block float-right px-7 pt-11 text-black">로그인</div></Link>
            </div>
            <div className="">
              <Link to={'/service'}><div className="inline-block pl-44 pt-3 pb-2 text-black">서비스 소개</div></Link>
              <Link to={'/reference'}><div className="inline-block pl-7 pt-3 pb-2 text-black">평판조회</div></Link>
              <Link to={'/sample'}><div className="inline-block pl-7 pt-3 pb-2 text-black">평판데이터</div></Link>
            </div>
          </div> 
        </>
      }
  
    </>
    
  )
}

