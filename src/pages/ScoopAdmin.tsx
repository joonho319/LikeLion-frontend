/* This example requires Tailwind CSS v2.0+ */
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { ScoopCreateAuthor } from '../components/ScoopCreateAuthor'
import { ScoopCreateNewsletter } from '../components/ScoopCreateNewsletter'
import { ScoopCreateWebtoon } from '../components/ScoopCreateWebtoon'

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, href: '#', current: true },
  { name: 'Team', icon: UsersIcon, href: '#', current: false },
  { name: 'Projects', icon: FolderIcon, href: '#', current: false },
  { name: 'Calendar', icon: CalendarIcon, href: '#', current: false },
  { name: 'Documents', icon: InboxIcon, href: '#', current: false },
  { name: 'Reports', icon: ChartBarIcon, href: '#', current: false },
]

function classNames(...classes:any[]) {
  return classes.filter(Boolean).join(' ')
}

export const ScoopAdmin = () => {
  const [category, setCategory] = useState('1');
  const history = useHistory();
  return (
    <div className="flex ">
      <div className="flex-none bg-gray-800 text-white text-lg" style={{width:"300px", height:"100vh"}}>
        <div className="mt-24 text-center py-5 bg-green-700 cursor-pointer" onClick={() => history.push('/')}>홈으로 돌아가기</div>
        <div className="mt-24 text-center py-5 bg-green-700 cursor-pointer" onClick={() => setCategory('1')}>웹툰 컨텐츠 정보 업로드</div>
        <div className="mt-10 text-center py-5 bg-green-700 cursor-pointer" onClick={() => setCategory('2')}>뉴스레터 정보 올리기</div>
        <div className="mt-10 text-center py-5 bg-green-700 cursor-pointer" onClick={() => setCategory('3')}>웹툰작가 인스타, 유튜브 올리기</div>
      </div>
      <div className="flex-grow h-16 ">
        { category ==='1' &&
          <div className="p-10">
            <div>웹툰 데이터 업로드</div>
            <ScoopCreateWebtoon />
          </div>
        }
        { category ==='2' &&
          <div className="p-10">
            <div>뉴스레터 정보 업로드</div>
            <ScoopCreateNewsletter />
          </div>
        }
        { category ==='3' &&
          <div className="p-10">
            <div>웹툰 작기 정보 업로드</div>
            <ScoopCreateAuthor />
          </div>
        }
      </div>
    </div>
  )
}
