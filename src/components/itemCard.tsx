import React from 'react';


interface VideoProps {
  src: any;
  color: string;
  href: string;
  name: string;
  discount: number;
  price: number;
  commission: number;
  is_commission: boolean;
}

export const ItemCard: React.FC<VideoProps> = ({
  src,
  color,
  href,
  name,
  discount,
  price,
  commission,
  is_commission
}) => {
  return (
    <div className="group relative border-2 border-gray-100 border-opacity-90 rounded-md shadow-lg ">
      <div className="w-full h-56 rounded-md overflow-hidden group-hover:opacity-75 lg:h-52 xl:h-60 p-4">
        <img
          src={src}
          className="w-full h-full object-center object-cover rounded-md"
        />
      </div>
      <p className="mt-1 text-sm text-gray-500 ml-4">{color}</p>
      <h3 className="mt-1 text-md font-normal text-gray-700 ml-4">
        <a href={href}>
          <span className="absolute inset-0" />
          {name}
        </a>
      </h3>
      <span className="mt-1 text-xs font-medium text-red-500 mr-1 pl-4">{discount}%</span>
      <span className="mt-1 text-xs font-medium text-gray-400 mr-1 line-through">{price}원 </span>
      <span className="mt-1 text-sm font-medium text-gray-900">{ price * (100 -discount)/100}원</span>
      {
        is_commission ? <div className="mt-3 text-sm font-medium rounded-b-md text-gray-900 bg-gray-200 text-center p-1">판매금액의 {commission}%</div> :
        <></>

      }
      
    </div>
  )
}