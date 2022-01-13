import React from 'react';

import Webtoon from '../images/독립일기.png';

interface WebtoonAuthorCardProps {
  authors: any[]
}



export const ScoopAuthorCard: React.FC<WebtoonAuthorCardProps> = ({
  authors
}) => {
  return (
    <section aria-labelledby="category-heading" className="xl:max-w-7xl xl:mx-auto xl:px-8">

      <div className="mt-4 flow-root">
        <div className="-my-2">
          <div className="box-content py-2 relative  overflow-x-auto xl:overflow-visible" style={{height:"140px"}}>
            <div className="absolute min-w-screen-xl px-4 flex space-x-3 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-8 xl:gap-x-8">
              {authors.map((author) => (
                <a
                  key={author.name}
                  className="relative flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                  style={{width:"110px", height:"140px"}}
                  href={author.instagram}
                  target="_blank"
                >
                  <div aria-hidden="true" className="absolute inset-0">
                    <img src={author.instagramImage} alt="" className="object-center object-cover rounded-full border-2" style={{width:"110px", height:"110px"}} />
                    <div className="mt-2 text-center text-sm  text-black" >{author.name}</div>
                  </div>
                  {/* <div className="">
                    <div className="mt-auto text-center text-sm  text-black" >{author.name}</div>
                  </div> */}
                  
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    
      /* <div style={{backgroundImage: `url(${Webtoon})`, backgroundSize: '100% 70%', backgroundRepeat:"no-repeat", width:"100%", height:"260px"}} 
        className="group p-4 rounded-2xl border hidden md:inline-block"
      >
        <div className="grid justify-center font-bold text-2xl" style={{marginTop: "173px"}}  >{webtoon.title}</div>
        <div className="grid justify-center text-gray-700 text-base ">{webtoon.platform}</div>
      </div>


      <div style={{backgroundImage: `url(${Webtoon})`, backgroundSize: '100% 70%', backgroundRepeat:"no-repeat", width:"100%", height:"200px"}} 
        className="group p-4 rounded-2xl border md:hidden"
      >
        <div className="grid justify-center font-bold text-lg" style={{marginTop: "132px"}}  >{webtoon.title}</div>
        <div className="grid justify-center text-gray-700 text-xs">{webtoon.platform}</div>
      </div> */
    // </>
   
  )
}