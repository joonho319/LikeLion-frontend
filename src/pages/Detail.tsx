import { useParams } from "react-router-dom";

interface Params {
  id: string;
}

export const Detail = () => {
  const { id } = useParams<Params>();
  return (
    <div>
      상품 상세피이지
    </div>
  )
}