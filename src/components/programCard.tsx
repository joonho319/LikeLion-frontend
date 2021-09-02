

interface ProgramCardProps {
  reviewPosts: any[]
}


export const ProgramCard:React.FC<ProgramCardProps> = ({reviewPosts}) => {
  return (
    <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-4 lg:max-w-7xl">
      {reviewPosts.filter((v,i) => (i < 8)).map((post,i ) => (
        <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-cyan-600">
                <a href={post.category.href} className="hover:underline">
                  {post.category.name}
                </a>
              </p>
              <a href={post.href} className="block mt-2">
                <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                <p className="mt-3 text-base text-gray-500">{(post.preview.length > 110) ? post.preview.substring(0,100) + '..' : post.preview}</p>
              </a>
            </div>
            <div className="mt-6 flex items-center">
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  <a href={post.author.href} className="hover:underline">
                    {post.author.name}
                  </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime={post.datetime}>{post.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}