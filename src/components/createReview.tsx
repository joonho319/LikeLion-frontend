import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { createReviewMutation, createReviewMutationVariables } from "../__generated__/createReviewMutation";
import { ReviewRole } from "../__generated__/globalTypes";



const CREATE_REVIEW_MUTATION = gql`
  mutation createReviewMutation($reviewInput: CreateReviewtInput!) {
    createReview(input: $reviewInput) {
      ok,
      error
    }
  }
`;

interface IForm {
  area: ReviewRole;
  review: string;
  company: string;
  name: string;
  title: string;
  rating: number;
}

export const CreateReview = () => {
  const history = useHistory();
  const { register, getValues, handleSubmit, formState: { errors } } = useForm<IForm>();
  const onCompleted = (data: createReviewMutation) => {
    const {
      createReview: { ok, error },
    } = data;

    if (ok) {
      alert('리뷰가 성공적으로 제출되었습니다.');
      window.location.reload();
    } 
  };
  const [ applyMutation, { data: createReviewMutationResult, loading } ] = useMutation<createReviewMutation, createReviewMutationVariables>(CREATE_REVIEW_MUTATION, { onCompleted});
  const onSubmit = () => {
      const { area, review, company, name, title, rating } = getValues();
      applyMutation({
        variables: {
          reviewInput: {
            area,
            review,
            company,
            name,
            title,
            rating: Number(rating)
          }
        }
      });
    
  }
  const inValid = () => {
    console.log(errors)
  }

  return (
    <>
      <div className="max-w-3xl mx-auto p-4 my-28 grid justify-items-center shadow-lg rounded-md" style={{ border: "solid 1px #eeeeee"}}>
        <form className="w-4/5" onSubmit={handleSubmit(onSubmit, inValid)} >
          <div className="space-y-8 sm:space-y-5">
            <div>
              <h3 className="text-2xl mt-10 font-bold text-center text-indigo-700">리뷰작성</h3>
            </div>
            <div className="sm:space-y-5">
              <div className=" sm:space-y-5">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5">
                  <label htmlFor="area" className="block text-sm font-medium text-gray-700 sm:mt-px p-1">
                    멘토링 분야
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <select
                      {...register("area", {
                        required: "멘토링 분야을 입력해주세요",
                      })}
                      name="area"
                      autoComplete="area"
                      className="pl-3 pr-10 py-2 max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    >
                      <option value="idea">아이디어</option>
                      <option value="business_plan">사업계획서</option>
                      <option value="marketing">마케팅전략</option>
                      <option value="bm">비즈니스모델</option>
                      <option value="strategy">사업화전략</option>
                      <option value="investment">투자전략</option>
                    </select>  
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 sm:mt-px p-1">
                    신청자명
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      {...register("name", {
                        required: "이름을 입력해주세요",
                      })}
                      type="text"
                      name="name"
                      autoComplete="given-name"
                      placeholder="신청자명을 입력해주세요"
                      className="max-w-lg block w-full border-2 p-1  focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 sm:mt-px p-1">
                    회사명
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      {...register("company", {
                        required: "회사명을 입력해주세요",
                      })}
                      name="company"
                      type="company"
                      autoComplete="company"
                      placeholder="회사명을 입력해주세요"
                      className="block max-w-lg w-full border-2 p-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 sm:mt-px p-1">
                    직함
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      {...register("title", {
                        required: "직함을 입력해주세요",
                      })}
                      name="title"
                      type="title"
                      autoComplete="title"
                      placeholder="직함을 입력해주세요"
                      className="block max-w-lg w-full border-2 p-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5">
                  <label htmlFor="rating" className="block text-sm font-medium text-gray-700 sm:mt-px p-1">
                    별점
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <select
                      {...register("rating", {
                        required: "점수을 입력해주세요",
                      })}
                      name="rating"
                      autoComplete="rating"
                      className="pl-3 pr-10 py-2 max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    >
                      <option value="5">5</option>
                      <option value="4">4</option>
                      <option value="3">3</option>
                      <option value="2">2</option>
                      <option value="1">1</option>
                    </select>  
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5">
                <label htmlFor="review" className="block text-sm font-medium text-gray-700 sm:mt-px">
                  리뷰
                </label>
                <div className="mt-3 sm:mt-0 sm:col-span-2">
                  <textarea
                    {...register("review", {
                      required: "리뷰을 적어주세요",
                    })}
                    name="review"
                    rows={6}
                    placeholder="좋았던 점 혹은 안좋았던 점을 남겨주세요."
                    className="max-w-lg p-1 shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-md border border-gray-300 rounded-md"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-12 mb-10">
            <div className="flex justify-center">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                리뷰 제출
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
