import { useForm } from 'react-hook-form';

interface IForm {
  title: string;
  name: string;
  channel: string;
  channelImage: string;
  instagram: string;
}

export const ScoopCreateAuthor = () => {
  const { register, getValues, handleSubmit, formState: { errors } } = useForm<IForm>();

  const onSubmit = () => {
    const { title, name, channel, channelImage, instagram } = getValues();
  }
  const inValid = () => {
    console.log(errors)
  }
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
          {...register("channel", {
            required: "채널명을 입력해주세요",
            // validate: (channel) => channel.includes("gmail.com")
          })}
          type="channel" 
          name="channel" 
          required 
          className="w-full mx-auto border-2 border-gray-300 mt-5 py-2 px-2 rounded-md text-base text-gray-900"
          placeholder="채널명을 입력해주세요" 
        />
      </div>  
      {/* <div className="mx-auto">
        <input 
          {...register("channel image", {
            required: "channel image 코드 입력해주세요",
            // validate: (channel image) => channel image.includes("gmail.com")
          })}
          type="channel image" 
          name="channel image" 
          required 
          className="w-full mx-auto border-2 border-gray-300 mt-5 py-2 px-2 rounded-md text-base text-gray-900"
          placeholder="channel image 아이디를 입력해주세요  " 
        />
      </div>      */}
      <div className="mx-auto">
        <input 
          {...register("instagram", {
            required: "채널명을 입력해주세요",
            // validate: (instagram) => instagram.includes("gmail.com")
          })}
          type="instagram" 
          name="instagram" 
          required 
          className="w-full mx-auto border-2 border-gray-300 mt-5 py-2 px-2 rounded-md text-base text-gray-900"
          placeholder="인스타그램 주소를 입력해주세요" 
        />
      </div>  
      <div className="mx-auto mb-20">
        <button className="w-full mx-auto bg-red-500 px-5 py-3 mt-5 text-white rounded-full ">업로드하기</button>
      </div>
    </form>
  )
}