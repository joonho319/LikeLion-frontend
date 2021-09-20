import React, { useState, useMemo } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'
import TestImage from '../images/독립일기.png';
import styled from 'styled-components';
import { ScoopWebtoonRecommendCard } from '../components/ScoopWebtoonRecommendCard';
import { ScoopWebtoonRecommendGuideCard } from '../components/ScoopWebtoonRecommendGuideCard';
import { ScoopSubHeader } from '../components/ScoopSubHeader';
import { ScoopFooter } from '../components/ScoopFooter';

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
  const [count, setCount] = useState(1);
  const start = () => {
    setIsStart(true);
  }

  const swiped = (direction: any, nameToDelete: any) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
    setCount(count+1)
  }

  const outOfFrame = (name: any) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div className="max-w-11/12 mx-auto">
      <ScoopSubHeader />
      {isStart &&
        <div className="text-center mt-2 font-bold text-lg">
          {count} / {db.length}
        </div>
      }
      {!isStart ? 
        <>
          <div className="text-center text-xl mt-3 font-bold">웹툰을 평가하고 </div>
          <div className="text-center text-xl font-bold">AI의 추천을 받으세요!</div>
          <div className="text-center text-sm mt-3">*웹툰 추천 참여 방법</div>
          <ScoopWebtoonRecommendGuideCard webtoon={db[0]} /> 
          <div className="border rounded-3xl bg-red-500 py-2 w-11/12 mx-auto shadow-md mt-5 mb-20 text-center text-white" onClick={start}>시작!</div>
        </> :
        <>

          {db.map((character, i) =>
            <>
              <SimpleTinderCard key={character.name}  onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                <ScoopWebtoonRecommendCard webtoon={character} />
              </SimpleTinderCard>
            </>
          )}
        </>
      }
      {lastDirection ? <h2 className='infoText mt-40'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
      <ScoopFooter />
    </div>
  )
}