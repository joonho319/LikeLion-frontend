import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router"
import { getEditorRecommendbyId, getEditorRecommendbyIdVariables } from "../__generated__/getEditorRecommendbyId";


interface IParams {
  id: string;
}

const GET_EDITOR_RECOMMEND = gql`
  query getEditorRecommendbyId($input: GetEditorRecommendIntput!) {
    getEditorRecommendbyId(input: $input) {
      ok
      error
      editorRecommend {
        id
        html
        title
        
      }
    }
  }
`;

export const ScoopEditorWebtoonDetail = () => {
  const params = useParams<IParams>();
  const { data, subscribeToMore } = useQuery<getEditorRecommendbyId, getEditorRecommendbyIdVariables>(
    GET_EDITOR_RECOMMEND,
    {
      variables: {
        input: {
          id: +params.id,
        },
      },
    }
  );
  
  return (
    <>
      {data?.getEditorRecommendbyId.editorRecommend ?
        <div dangerouslySetInnerHTML={{__html: data?.getEditorRecommendbyId.editorRecommend?.html }}
        >

        </div> :
        <>laoding...</>
      }
    
    </>
  )
}