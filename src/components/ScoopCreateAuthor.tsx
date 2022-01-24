import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { useForm } from 'react-hook-form';
import { createAuthorMutation, createAuthorMutationVariables } from '../__generated__/createAuthorMutation';

export const CREATE_AUTHOR_MUTATION = gql`
  mutation createAuthorMutation($name: String!, $youtube: String!, $youtubeSrc: String!, $youtubeImage: String!, $instagram: String!, $instagramImage: String!) {
    createAuthor(input: {
      name: $name,
      youtube: $youtube,
      youtubeSrc: $youtubeSrc,
      youtubeImage: $youtubeImage,
      instagram: $instagram,
      instagramImage: $instagramImage,
    }) {
      ok,
      error
    } 
  }
`;

interface IForm {
  name: string;
  youtube: string;
  youtubeSrc: string;
  youtubeImage: FileList;
  instagram: string;
  instagramImage: FileList;
}

export const ScoopCreateAuthor = () => {
  const { register, getValues, handleSubmit, formState: { errors } } = useForm<IForm>();

  const onSubmit = async () => {
    const { name, youtube, youtubeImage, youtubeSrc, instagram, instagramImage } = getValues();
  
    let youtubeImages = '' ;
    if(youtubeImage.length) {
      const actualFile = youtubeImage[0];
      const formBody = new FormData();
      formBody.append("file", actualFile);
      const { url: youtubeI } = await (await fetch( process.env.NODE_ENV ==='production' ? 'https://scoop-house-backend.herokuapp.com' :'http://localhost:4000/uploads', {
        method: "POST",
        body: formBody
      })).json();
      youtubeImages= youtubeI
    } 

    let instagramImages = '';
    if(instagramImage.length) {
      const actualFiles = instagramImage[0];
      const formInsta = new FormData();
      formInsta.append("file", actualFiles);
      const { url: instagramI } = await (await fetch( process.env.NODE_ENV ==='production' ? 'https://scoop-house-backend.herokuapp.com' :'http://localhost:4000/uploads', {
        method: "POST",
        body: formInsta
      })).json();
      instagramImages = instagramI;
      console.log(instagramI)
    }

    createAuthorMutation({
      variables: {
        name,
        youtube,
        youtubeImage: youtubeImages,
        youtubeSrc,
        instagram,
        instagramImage: instagramImages
      }
    });
    //mutation (upload) ==> thumbnail: url
  }

  const inValid = () => {
    console.log(errors)
  }

  const onCompleted = (data: createAuthorMutation) => {
    const {
      createAuthor: { ok, error },
    } = data;
    if (ok) {
      alert('웹툰작가 정보가 등록되었습니다.')
      window.location.reload();
    } else {
      alert(error)
    }
  };

  const [createAuthorMutation, { loading, data: createAuthorMutationResult }] 
    = useMutation<createAuthorMutation, createAuthorMutationVariables>(
      CREATE_AUTHOR_MUTATION, 
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
          placeholder="작가 이름을 입력해주세요 " 
        />
      </div>
      <div className="mx-auto">
        <input
          {...register("youtube")} 
          type="youtube" 
          name="youtube"  
          className="w-full mx-auto border-2 border-gray-300 mt-5 py-2 px-2 rounded-md text-base text-gray-900"
          placeholder="유튜브 채널명을 입력해주세요" 
        />
      </div>
      <div className="mx-auto">
        <input 
          {...register("youtubeSrc")}
          type="youtubeSrc" 
          name="youtubeSrc"  
          className="w-full mx-auto border-2 border-gray-300 mt-5 py-2 px-2 rounded-md text-base text-gray-900"
          placeholder="유튜브 채널 주소를 입력해주세요" 
        />
      </div>
      <div className="mx-auto">
        <div className="mt-5">유튜브 채널 이미지</div>
        <input 
          {...register("youtubeImage")}
          type="file" 
          name="youtubeImage" 
          accept="image/*" 
          className="w-full mx-auto border-2 border-gray-300 py-2 px-2 rounded-md text-base text-gray-900"
        />
      </div>  
      <div className="mx-auto">
        <input 
          {...register("instagram")}
          type="instagram" 
          name="instagram"  
          className="w-full mx-auto border-2 border-gray-300 mt-5 py-2 px-2 rounded-md text-base text-gray-900"
          placeholder="인스타그램 주소를 입력해주세요" 
        />
      </div>  
      <div className="mx-auto">
        <div className="mt-5">인스타그램 프로필 이미지</div>
        <input 
          {...register("instagramImage")}
          type="file" 
          name="instagramImage" 
          accept="image/*" 
          className="w-full mx-auto border-2 border-gray-300  py-2 px-2 rounded-md text-base text-gray-900"
          placeholder="인스타그램 이미지을 입력해주세요" 
        />
      </div>  
      <div className="mx-auto mb-20">
        <button className="w-full mx-auto bg-red-500 px-5 py-3 mt-5 text-white rounded-full ">업로드하기</button>
      </div>
    </form>
  )
}