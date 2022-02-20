import { useHistory } from "react-router";
import { Navbar } from "../components/Navbar"
import MainImage from '../images/temp1.png';

export const Main = () => {
  const history = useHistory();
  return (
    <div >
      <Navbar />
      <div><img src={MainImage} style={{width:'100vw'}} /></div>
      <div style={{height:'1000px'}}>
        <div className="grid justify-center lg:text-3xl">이 사이트에 대한 설명</div>
        <button onClick={()=> history.push('/exhibition')} className="bg-indigo-500 border text-white px-4 py-2 rounded-sm grid justify-center">
          전시회 바로가기
        </button> 
      </div>
    </div>
  )
}