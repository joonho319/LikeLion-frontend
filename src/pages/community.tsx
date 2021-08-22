import React from 'react';
import { Header2 } from '../components/header2';
/* This example requires Tailwind CSS v2.0+ */
const people = [
  { title: '다들 아이템을 어떻게 선정하세요?', name: '제준호', region: '광주', created_at: '2021-08-15' },
  { title: '사업계획서 적는 꿀팁 공유합니다.', name: '제준호', region: '부산', created_at: '2021-08-14' },
  { title: '발표자료 드디어 마무리 완성했습니다.', name: '제준호', region: '대전', created_at: '2021-08-13' },
  // More people...
]

export const Community = () => {
  return (
    <>
      <Header2 />
      <div className="p-52">
        커뮤니티
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      제목
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      이름
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      지역
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      날짜
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {people.map((person, i) => (
                    <tr key={person.name + i}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.region}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.created_at}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
