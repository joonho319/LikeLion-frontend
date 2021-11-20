import React, { useState, useMemo, useEffect } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'
import TestImage from '../images/독립일기.png';
import styled from 'styled-components';
import { ScoopWebtoonRecommendCard } from '../components/ScoopWebtoonRecommendCard';
import { ScoopWebtoonRecommendGuideCard } from '../components/ScoopWebtoonRecommendGuideCard';
import { ScoopSubHeader } from '../components/ScoopSubHeader';
import { ScoopFooter } from '../components/ScoopFooter';
import { ScoopHeader } from '../components/ScoopHeader';

const db = [
  {
    name: '독립일기',
    url: '../images/독립일기.png',
    description: '처음으로 나만의 집이 생긴다면? 자까 작가의 나혼자 사는 이야기'
  },
  {
    name: '싸움독학',
    url: '../images/scoopImage.png',
    description: '힘없고 가진거 하나 없이 맞고만 살던 나였는데... 우연히 비밀의 뉴튜브를 발견하게 되고 갑자기 떼돈을 벌었다.'
  },
  {
    name: '독립일기',
    url: '../images/독립일기.png',
    description: '처음으로 나만의 집이 생긴다면? 자까 작가의 나혼자 사는 이야기'
  },
  {
    name: '싸움독학',
    url: '../images/scoopImage.png',
    description: '힘없고 가진거 하나 없이 맞고만 살던 나였는데... 우연히 비밀의 뉴튜브를 발견하게 되고 갑자기 떼돈을 벌었다.'
  },
  {
    name: '독립일기',
    url: '../images/독립일기.png',
    description: '처음으로 나만의 집이 생긴다면? 자까 작가의 나혼자 사는 이야기'
  }
]

const SimpleTinderCard = styled(TinderCard)`
  position: absolute;
  background-color: #fff;
  
`;

const TinderCardBackground = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  border-
`;

const alreadyRemoved: any[] = []
let charactersState = db // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

export const  ScoopWebtoonRecommend =  () => {
  const characters = db
  const [lastDirection, setLastDirection] = useState()
  const [isStart, setIsStart] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [isResult, setIsResult ] = useState(false);
  const [count, setCount] = useState(1);
  const start = () => {
    setIsStart(true);
  }

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);

  };

  useEffect(() => {
    if(count > 5) {
      setIsFinish(true);
      setTimeout(() => {
      console.log(isResult)
      setIsResult(true);
      console.log('짠')
      console.log(isResult)
      }, 3000);
    }
  },[count]);


  const swiped = (direction: any, nameToDelete: any) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction);
      handleIncrement();
      console.log(count)
    
  }

  const outOfFrame = (name: any) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div>
      <ScoopSubHeader />
      <div className="max-w-11/12 mx-auto">
        {isFinish ?
          <>
            <svg className="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24"> </svg>
            {isResult ? 
              <div className="flex">
                <div className="flex-1"></div>
                <div className="flex-shrink-0">
                  <div className="text-center text-4xl font-bold mt-5">AI가 분석한</div>
                  <div className="text-center text-4xl font-bold mt-2">당신이 좋아할 웹툰입니다.</div>
                  <ScoopWebtoonRecommendCard webtoon={db[0]} />
                </div>
                <div className="flex-1"></div>
                
              </div>
               : 
              '당신이 좋아할만한 웹툰을 찾고있습니다.'
            }
          </> : 
          <div>
            {!isStart ? 
              <div className="flex">
                <div className="flex-grow"></div>
                <div className="flex-grow-0 w-11/12 md:hidden">
                  <div className="text-center text-xl md:text-3xl mt-3 md:mt-14 font-bold">웹툰을 평가하고 </div>
                  <div className="text-center text-xl md:text-3xl font-bold">AI의 추천을 받으세요!</div>
                  <div className="text-center text-sm md:text-base mt-3">*웹툰 추천 참여 방법</div>
                  <ScoopWebtoonRecommendGuideCard webtoon={db[0]} /> 
                  <div className="border rounded-3xl bg-red-500 py-2 w-11/12 md:w-1/5 mx-auto shadow-md mt-5 mb-20 text-center text-white" onClick={start}>시작!</div>
                </div>
                <div className="hidden md:flex-grow-0 md:inline-block" style={{width:"370px"}}>
                  <div className="text-center text-xl md:text-3xl mt-3 md:mt-14 font-bold">웹툰을 평가하고 </div>
                  <div className="text-center text-xl md:text-3xl font-bold">AI의 추천을 받으세요!</div>
                  <div className="text-center text-sm md:text-base mt-3">*웹툰 추천 참여 방법</div>
                  <ScoopWebtoonRecommendGuideCard webtoon={db[0]} /> 
                  <div className="border rounded-3xl bg-red-500 py-2 w-11/12 mx-auto shadow-md mt-5 mb-20 text-center text-white" onClick={start}>시작!</div>
                </div>
                <div className="flex-grow"></div>
              </div>
              :
              <div className="mx-auto ">
                <div className="text-center mt-2 font-bold text-lg">
                  {count} / {db.length}
                </div>
                <div className="" style={{marginLeft:"39%"}}>
                  {db.map((character, i) =>
                    <div className="gird mx-auto">
                      <SimpleTinderCard key={character.name}  onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                        <ScoopWebtoonRecommendCard key={character.name} webtoon={character} />
                      </SimpleTinderCard>
                    </div>
                  )}
                </div>
              </div>
            }
            {lastDirection ? <h2 className='infoText mt-40'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
          </div>
        }
        
        <ScoopFooter />
      </div>

    </div>
  )
}