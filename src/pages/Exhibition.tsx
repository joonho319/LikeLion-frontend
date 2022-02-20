import { useParams } from "react-router-dom";

interface Params {
  id: string;
}
export const Exhibition = () => {
  const { id } = useParams<Params>();
  return (
    <div>
      전시 페이지
    </div>
  )
}