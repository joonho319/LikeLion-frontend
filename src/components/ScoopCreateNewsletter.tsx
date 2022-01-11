import { gql, useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { createRecommendMutation, createRecommendMutationVariables } from '../__generated__/createRecommendMutation';

interface IForm {
  title: string;
  name: string;
  html: string;

}

export const CREATE_RECOMMEND_MUTATION = gql`
  mutation createRecommendMutation($title: String!, $name: String!, $html: String!) {
    createRecommend(input: {
      title: $title,
      name: $name,
      html: $html
    }) {
      ok,
      error
    } 
  }
`;


export const ScoopCreateNewsletter = () => {
  const { register, getValues, handleSubmit, formState: { errors } } = useForm<IForm>();

  const onCompleted = (data: createRecommendMutation) => {
    const {
      createRecommend: { ok, error },
    } = data;
    if (ok) {
      alert('웹툰정보가 등록되었습니다.')
      window.location.reload();
    } else {
      alert(error)
    }
  };

  const onSubmit = async () => {
    const { title, name, html } = getValues();

    createRecommendMutation({
      variables: {
        title,
        name,
        html
      }
    });
    //mutation (upload) ==> thumbnail: url
  }

  const inValid = () => {
    console.log(errors)
  }
  const [createRecommendMutation, { loading, data: createRecommendMutationResult }] 
    = useMutation<createRecommendMutation, createRecommendMutationVariables>(
      CREATE_RECOMMEND_MUTATION, 
      { onCompleted});

  return (
    <form className="mt-5" onSubmit={handleSubmit(onSubmit, inValid)}>
      <div className=" mx-auto">
        <input 
          {...register("name", {
            required: "에디터 이름을  입력해주세요 ( ex) 두명일 경우 ,로 구분) ",
          })}
          type="name" 
          name="name" 
          required 
          className="w-full mx-auto border-2 border-gray-300 mt-7 py-2 px-2 rounded-md text-base text-gray-900"
          placeholder="에디터 이름을  입력해주세요 ( ex) 두명일경우, 민초,바닐라) " 
        />
      </div>
      <div className="mx-auto">
        <input 
          {...register("title", {
            required: "뉴스레터 제목을 입력해주세요",
            // validate: (title) => title.includes("gmail.com")
          })}
          type="title" 
          name="title" 
          required 
          className="w-full mx-auto border-2 border-gray-300 mt-5 py-2 px-2 rounded-md text-base text-gray-900"
          placeholder="뉴스레터 제목을 입력해주세요" 
        />
      </div>
      <div className="mx-auto">
        <input 
          {...register("html", {
            required: "html 코드 입력해주세요",
            // validate: (html) => html.includes("gmail.com")
          })}
          type="html" 
          name="html" 
          required 
          className="w-full mx-auto border-2 border-gray-300 mt-5 py-2 px-2 rounded-md text-base text-gray-900"
          placeholder="스티비에서 가져온 html 코드를 입력해주세요  " 
        />
      </div>     
      <div className="mx-auto mb-20">
        <button className="w-full mx-auto bg-red-500 px-5 py-3 mt-5 text-white rounded-full ">업로드하기</button>
      </div>
    </form>
  )
}