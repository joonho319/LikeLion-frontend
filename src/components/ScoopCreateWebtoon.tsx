import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { useForm } from 'react-hook-form';
import { createContentMutation, createContentMutationVariables } from '../__generated__/createContentMutation';


export const CREATECONTENT_MUTATION = gql`
  mutation createContentMutation($title: String!, $author: String!, $genre: String!, $thumbnail: String!, $category: String!, $platform: String!) {
    createContent(input: {
      title: $title,
      author: $author,
      genre: $genre,
      thumbnail: $thumbnail,
      category: $category,
      platform: $platform,
    }) {
      ok,
      error
    } 
  }
`;

interface IForm {
  title: string;
  author: string;
  category: string;
  genre: string;
  platform: string;
  thumbnail: FileList;

}

export const ScoopCreateWebtoon = () => {
  const { register, getValues, handleSubmit, formState: { errors } } = useForm<IForm>();

  const onSubmit = async () => {
    const { title, author, category, genre, platform, thumbnail } = getValues();

    const actualFile = thumbnail[0];
    const formBody = new FormData();
    formBody.append("file", actualFile);
    const { url } = await (await fetch('http://localhost:4000/uploads', {
      method: "POST",
      body: formBody
    })).json();
    console.log("url ", url)

    createContentMutation({
      variables: {
        title,
        author,
        category,
        genre,
        platform,
        thumbnail: url
      }
    });
    //mutation (upload) ==> thumbnail: url
  }
  const inValid = () => {
    console.log(errors)
  }
  const onCompleted = (data: createContentMutation) => {
    const {
      createContent: { ok, error },
    } = data;
    if (ok) {
      alert('웹툰정보가 등록되었습니다.')
    } else {
      alert(error)
    }
  };

  const [createContentMutation, { loading, data: createContentMutationResult }] 
    = useMutation<createContentMutation, createContentMutationVariables>(
      CREATECONTENT_MUTATION, 
      { onCompleted});
  return (
    <form className="mt-5" onSubmit={handleSubmit(onSubmit, inValid)}>
      <div className=" mx-auto">
        <input 
          {...register("author", {
            required: "작가이름을  입력해주세요 ( ex) 두명일 경우 & 로 구분) ",
            // validate: (author) => author.includes("gmail.com")
          })}
          type="author" 
          name="author" 
          required 
          className="w-full mx-auto border-2 border-gray-300 mt-7 py-2 px-2 rounded-md text-base text-gray-900"
          placeholder="작가이름을  입력해주세요 ( ex) 두명일 경우 & 로 구분) " 
        />
      </div>
      <div className="mx-auto">
        <input 
          {...register("title", {
            required: "웹툰제목을 입력해주세요",
            // validate: (title) => title.includes("gmail.com")
          })}
          type="title" 
          name="title" 
          required 
          className="w-full mx-auto border-2 border-gray-300 mt-5 py-2 px-2 rounded-md text-base text-gray-900"
          placeholder="웹툰제목을 입력해주세요" 
        />
      </div>
      <div className="mx-auto">
        <input 
          {...register("genre", {
            required: "장르 입력해주세요",
            // validate: (genre) => genre.includes("gmail.com")
          })}
          type="genre" 
          name="genre" 
          required 
          className="w-full mx-auto border-2 border-gray-300 mt-5 py-2 px-2 rounded-md text-base text-gray-900"
          placeholder="장르 입력해주세요  ( ex) 두개일 경우 & 로 구분) " 
        />
      </div>
      <div className="mx-auto">
        <div className="mt-1 sm:mt-0 sm:col-span-2">
          <select
            {...register("platform", {
              required: "플랫폼 입력해주세요",
              // validate: (platform) => platform.includes("gmail.com")
            })}
            id="platform"
            name="platform"
            autoComplete="country-name"
            className="max-w-lg block py-3 mt-5 border focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
          >
            <option>네이버</option>
            <option>카카오</option>
            <option>레진코믹스</option>
            <option>투믹스</option>
            <option>탑툰</option>
          </select>
        </div>
        
        {/* <input 
          {...register("platform", {
            required: "플랫폼 입력해주세요",
            // validate: (platform) => platform.includes("gmail.com")
          })}
          type="platform" 
          name="platform" 
          required 
          className="w-full mx-auto border-2 border-gray-300 mt-5 py-2 px-2 rounded-md text-base text-gray-900"
          placeholder="플랫폼 입력해주세요(한글로 입력)" 
        /> */}
      </div>
      <div className="mx-auto">
        <div className="mt-1 sm:mt-0 sm:col-span-2">
          <select
            {...register("category", {
              required: "카테고리 입력해주세요",
              // validate: (category) => category.includes("gmail.com")
            })}
            id="category"
            name="category"
            autoComplete="country-name"
            className="max-w-lg block py-3 mt-5 border focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
          >
            <option>webtoon</option>
            <option>webnovel</option>
          </select>
        </div>
      </div>
      <div className="mx-auto">
        <div className="mt-5">썸네일 업로드</div>
        <input 
          {...register("thumbnail", {
            required: "플랫폼 입력해주세요",
            // validate: (platform) => platform.includes("gmail.com")
          })}
          type="file" 
          name="thumbnail" 
          accept="image/*"
          required 
          className="w-full mx-auto border-2 border-gray-300  py-2 px-2 rounded-md text-base text-gray-900"
          placeholder="썸네일 업로드" 
        />
      </div>
      <div className="mx-auto mb-20">
        <button className="w-full mx-auto bg-red-500 px-5 py-3 mt-5 text-white rounded-full ">업로드하기</button>
      </div>
    </form>
  )
}