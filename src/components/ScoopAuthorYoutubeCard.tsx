import React from 'react';
import YoutubeImage from '../images/play.png';


interface YoutubeCardProps {
  youtubes: any[]
}



export const ScoopAuthorYoutubeCard: React.FC<YoutubeCardProps> = ({
  youtubes
}) => {
  return (
    // <div className="w-1/2 relative rounded-3xl" style={{height:"200px"}}>
    //   <div style={{backgroundImage: `url(${Webtoon})`, backgroundSize: 'cover', backgroundRepeat:"no-repeat", height:"150px"}} 
    //     className="absolute inset-x-0 top-0 " 
    //   >s</div>
    // </div>
    <section aria-labelledby="category-heading" className="pt-12 xl:max-w-7xl xl:mx-auto xl:px-8">
      <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
        <h2 id="category-heading" className="text-xl font-extrabold tracking-tight text-gray-900">
          웹툰 작가 유튜브 모음
        </h2>
      </div>

      <div className="mt-4 flow-root">
        <div className="-my-2">
          <div className="box-content py-2 relative overflow-x-auto xl:overflow-visible" style={{height:"170px"}}>
            <div className="absolute min-w-screen-xl px-4 flex space-x-3 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-4 xl:gap-x-8">
              {youtubes.map((youtube) => (
                <div
                  key={youtube.name}
                  className="relative w-60 rounded-2xl p-3 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                  style={{border: "1px solid gray", height:"170px"}}
                >
                  <div aria-hidden="true" className="absolute inset-0">
                    <img src={youtube.image} alt="" className="w-96 object-center object-fill bg-gray-400" style={{height:"60%"}}/>
                  </div>
                  <div className="xl:hidden">
                    <div className="text-center text-lg font-bold text-gray" style={{marginTop:"45%"}}>{youtube.title}</div>
                    <div className="text-center text-sm  text-gray" >{youtube.author}</div>
                  </div>
                  <div className="hidden xl:block">
                    <div className="text-center text-lg font-bold text-gray" style={{marginTop:"38%"}}>{youtube.title}</div>
                    <div className="text-center text-sm  text-gray" >{youtube.author}</div>
                  </div>
                  {/* <div className="text-center text-base font-bold text-gray" style={{marginTop: "40%"}}>{youtube.title}</div>
                    <div className="text-center text-sm  text-gray" >{youtube.author}</div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
   
  )
}