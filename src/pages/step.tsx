/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/solid'
import { useState } from 'react';
import { BusinessPlan } from '../components/businessplan';
import { Competitive } from '../components/competitive';
import { Header2 } from '../components/header2'

const steps = [
  { id: '01', number: 1, name: '아이디어 발견', status: 'complete' },
  { id: '02', number: 2, name: '경쟁사 분석', status: 'complete' },
  { id: '03', number: 3, name: '사업계획서 작성', status: 'current' },
  { id: '04', number: 4, name: '정부지원사업 및 IR 발표자료', status: 'upcoming' },
  { id: '05', number: 5, name: '서비스 제작', status: 'upcoming' },
  { id: '06', number: 6, name: '마케팅', status: 'upcoming' },
]


export const Step = () => {
  const currentStage = 3;
  const [ stage, setStage ] = useState<number>(3);

  const changeStage = (num: any) => {
    if(currentStage < num) {
      alert('전 단계를 완료해주세요')
    } else {
      setStage(num)
    }
  }

  return (
    <>
      <Header2  page={'step'}/>
      <div className="r">
        <nav aria-label="Progress" className="">
          <ol className="border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0 mt-10">
            {steps.map((step, stepIdx) => (
              <li key={step.name} className="relative md:flex-1 md:flex">
                {step.status === 'complete' ? (
                  <a onClick={() => changeStage(step.number)} className="group flex items-center w-full">
                    <span className="px-6 py-4 flex items-center text-sm font-medium">
                      <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                        <CheckIcon className="w-6 h-6 text-white" aria-hidden="true" />
                      </span>
                      <span className="ml-4 text-sm font-medium text-gray-900">{step.name}</span>
                    </span>
                  </a>
                ) : step.status === 'current' ? (
                  <a onClick={() => changeStage(step.number)} className="px-6 py-4 flex items-center text-sm font-medium" aria-current="step">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full">
                      <span className="text-indigo-600">{step.id}</span>
                    </span>
                    <span className="ml-4 text-sm font-medium text-indigo-600">{step.name}</span>
                  </a>
                ) : (
                  <a onClick={() => changeStage(step.number)} className="group flex items-center">
                    <span className="px-6 py-4 flex items-center text-sm font-medium">
                      <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                        <span className="text-gray-500 group-hover:text-gray-900">{step.id}</span>
                      </span>
                      <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">{step.name}</span>
                    </span>
                  </a>
                )}

                {stepIdx !== steps.length - 1 ? (
                  <>
                    {/* Arrow separator for lg screens and up */}
                    <div className="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
                      <svg
                        className="h-full w-full text-gray-300"
                        viewBox="0 0 22 80"
                        fill="none"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0 -2L20 40L0 82"
                          vectorEffect="non-scaling-stroke"
                          stroke="currentcolor"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </>
                ) : null}
              </li>
            ))}
          </ol>
        </nav>
        { stage === 1 ?
            <></> :
          stage === 2 ?
            <Competitive /> :
          stage === 3 ?
            <BusinessPlan /> :
          stage === 4 ?
            <></> :
          stage === 5 ?
            <></> :
            <></>
        }
      </div>
    </>
  )
}
