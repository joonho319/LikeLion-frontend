import React from 'react';
import { useHistory } from 'react-router';

import Webtoon from '../images/독립일기.png';

interface WebtoonCardProps {
  webtoons: any[]
}



export const ScoopEditorWebtoonCard: React.FC<WebtoonCardProps> = ({
  webtoons
}) => {
  const history = useHistory();
  return (
    // <div className="w-1/2 relative rounded-3xl" style={{height:"200px"}}>
    //   <div style={{backgroundImage: `url(${Webtoon})`, backgroundSize: 'cover', backgroundRepeat:"no-repeat", height:"150px"}} 
    //     className="absolute inset-x-0 top-0 " 
    //   >s</div>
    // </div>
    <section aria-labelledby="category-heading" className="xl:max-w-7xl xl:mx-auto xl:px-8">
      {/* <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
        <h2 id="category-heading" className="text-xl font-extrabold tracking-tight text-gray-900">
          스쿱 에디터's 추천
        </h2>
      </div> */}

      <div className="mt-4 flow-root">
        <div className="-my-2">
          <div className="box-content py-2 relative h-56 overflow-x-auto xl:overflow-visible">
            <div className="absolute min-w-screen-xl px-4 flex space-x-3 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
              {webtoons.map((category) => (
                <div
                  key={category.name}
                  className="relative w-44 sm:h-56 rounded-2xl p-3 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto bg-gray-300"
                  style={{border: "1px solid gray"}}
                  onClick={() =>history.push(`/editorRecommend/${category.id}`)}
                >
                  <div aria-hidden="true" className="absolute inset-0">
                    <img src={category.thumbnail} alt="" className="w-96 object-center object-fill " style={{height:"70%"}}/>
                  </div>
                  <div className="xl:hidden">
                    <div className="mt-auto text-center text-lg font-bold text-gray" style={{marginTop:"98%"}}>{category.title}</div>
                    <div className="mt-auto text-center text-sm  text-gray" >{category.name}</div>
                  </div>
                  <div className="hidden xl:block">
                    <div className="mt-auto text-center text-lg font-bold text-gray" style={{marginTop:"77%"}}>{category.title}</div>
                    <div className="mt-auto text-center text-sm  text-gray" >{category.name}</div>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    
   
  )
}