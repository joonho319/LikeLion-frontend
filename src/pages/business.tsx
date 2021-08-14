import React from 'react';
import { useForm } from 'react-hook-form';

export const Business = () => {
  const { register, getValues, handleSubmit, formState: { errors } } = useForm();
  const items:any[] = ["사람인", "에이치알 클릭", "오늘회", "오늘, 와인한잔", "총각네 야채가게"];
  const business_model: any[] =  ["OTO", "OTT", "플랫폼"];

  const onSubmit = () => {
    const { email,name, password } = getValues();
    console.log(name)
      
    console.log("d")
  }

  return (
    <>
      <form>

      </form>
      <input
        type="text"
        name="email-address"
        id="email-address"
        autoComplete="email"
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
      <>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-start-1 grid-span-1">회사명 ( 크롤링을 통해 회사 데이터 수집 )</div>
          <div className="col-start-2 grid-span-1">비즈니스 모델 ( 우리가 직접 타이핑 )</div>
          <div className="col-start-3 grid-span-2">사업 형태</div>
          

          {items.map((v) => (
            <>
              {business_model.map((w)=> (
                <>
                  <div className="col-start-1 grid-span-1">{v}</div>
                  <div className="col-start-2 grid-span-1">{w}</div>
                  <div className="col-start-3 grid-span-2">{v}를 {w}의 방식으로 사업을 한다면 어떤 형태일까?</div>
                </>
              ))}
            </>
          ))}
        </div>
        새로운 회사가 나오면 db저장
      </>
    </>
  )
}