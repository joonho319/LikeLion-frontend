
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  MenuIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronRightIcon, ExternalLinkIcon } from '@heroicons/react/solid'
import { Header2 } from '../components/header2';
import Kim from '../images/kim.png'
import Shin from '../images/sintaesoon.png';
import Lee from '../images/Leewonyeop.png';
import Je from '../images/junhoje.png';
import { Footer } from '../components/footer';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
const features = [
  {
    name: 'Push to Deploy',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.',
    icon: CloudUploadIcon,
  },
  {
    name: 'SSL Certificates',
    description: 'Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple Queues',
    description: 'Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.',
    icon: RefreshIcon,
  },
  {
    name: 'Advanced Security',
    description: 'Ullam laboriosam est voluptatem maxime ut mollitia commodi. Et dignissimos suscipit perspiciatis.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Powerful API',
    description:
      'Ab a facere voluptatem in quia corrupti veritatis aliquam. Veritatis labore quaerat ipsum quaerat id.',
    icon: CogIcon,
  },
  {
    name: 'Database Backups',
    description: 'Quia qui et est officia cupiditate qui consectetur. Ratione similique et impedit ea ipsum et.',
    icon: ServerIcon,
  },
]
const blogPosts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { name: 'Article', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    author: {
      name: 'Roel Aufderehar',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '6 min',
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    category: { name: 'Video', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    author: {
      name: 'Brenna Goyette',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '4 min',
  },
  {
    id: 3,
    title: 'Improve your customer experience',
    href: '#',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { name: 'Case Study', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    author: {
      name: 'Daniela Metz',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '11 min',
  },
]

export const Introduction = () => {
  return (
    <>
      <Header2  page={'introduction'}/>
      
      {/* <div className="text-blue-900 text-4xl mt-20 lg:grid lg:justify-items-center lg:max-w-7xl">강사소개</div> */}
      <div className="mt-24">
          <div className="md:mx-auto md:grid md:justify-items-center md:max-w-7xl lg:text-lg">
            <div>
              <p className="lg:text-3xl mb-10 font-bold">마스트벤처스는 어떤 곳인가요?</p>
              <p>창업을 권하는 사회라는 말에 이의를 제기할 순 없을 것 같습니다. </p>
              <p>정부 지원은 폭발적으로 늘고있고, 창업 교육은 우후죽순으로 늘어 갑니다. </p>
              <p>창업 후 성공했다는 스타트업 대표들이 사람들의 부러움을 사고 있습니다. </p>
              <p>하지만 주변 창업자중에 이런 지원을 충분히 활용하면서 교육을 받으면서 건강하게 방향성을 조정하고, 행복하게 돈버는 사업가가 과연 얼마나 계신가요? </p>
              <p>솔직히 찾기 힘든게 사실입니다. 왜 그런걸까요?</p>< br />
              <p>자유롭고, 돈 많이 벌 수 있다는 창업에 대한 환상은 달콤하게 포장되어 있고 그 목표를 향해 가는 현실적인 가이드와 실질적인 피드백은 턱없이 부족하기 때문입니다.  </p>
              <p>수십년전 경영이론에 기반해 주입식으로 이뤄지는 창업 교육은 창업자의 현실감각을 오히려 저해하고 창업을 지속하고자 하는 의욕을 갉아먹는 요인이 되기도 합니다.</p>
              <p>어제의 정답이 오늘의 오답이 되는 빠른 변화의 세상에서 문제를 정확히 진단하고, 가설을 뾰족하게 세우고, 리즈너블한 해결책을 도출하는 능력을 갖춰가지 못하면 창업 후 벌어지는 예상못한 장애물들을 뛰어넘기 어렵습니다.</p><br />
              <p>마스트벤처스의 파트너 강의들은 그런 문제를 해결하는데 초점이 맞춰져 있습니다. </p>
              <p>-창업에 필요한 최소한의 이론과 오랜 창업 경험과 코칭 사례를 바탕으로 한 강의</p>
              <p>-반복적인 수강생의 발표와 피드백을 통한 아이템 검증과 비즈니스 모델 고도화</p>
              <p>-서비스 개발과 빌드업 과정에서 얻은 기술적 노하우 및 인간관계 노하우</p>< br />
              <p>이 모든 것들을 수강생 입장에서 가장 잘 전달할 수 있는 파트너가 뭉쳤습니다.</p>
              <p>지금 마스트벤처스를 통해 스스로 비판적인 생각을 하는 냉철함을 갖추고 좋은 인재를 내 편으로 만들 수 있는 설득력을 갖추고 적을 만들지 않는 매력을 갖춘 사업가가 되는 길을 준비해보세요.</p>
             
            </div>
          </div>
        <div className="pb-16 lg:pb-0 lg:z-10 lg:relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-7 lg:gap-8">
            <div className="relative lg:col-span-2">
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                <div className="overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                  <img
                    className="object-fit lg:object-cover w-full h-full lg:h-90 lg:w-full lg:mt-5"
                    src={Kim}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className=" lg:m-0 lg:col-span-5 lg:pl-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:max-w-none lg:mt-28">
                <blockquote>
                  <div>
                    <div className="mt-5 text-2xl lg:text-4xl text-blue-900 mb-7 font-bold">김기현 강사님
                      <span className="ml-3 text-sm lg:text-xl"> (주) 인스텝스 대표</span>
                    </div>
                    <svg
                      className="h-6 w-6 text-black opacity-100 mt-3"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="mt-3 text-lg  lg:text-lg font-medium text-black">
                    안녕하세요 김기현 입니다 <br />
                    저는 매년 많은 창업팀의 사업계획서를 보고 있습니다.<br />
                    그리고 그 기업들이 어떤 시간을 보내고 있는지 확인하고 있습니다.<br />
                    몇년이 지나면 이름도 빛도 없이 사라지는 많은 기업을 봤습니다. <br />
                    누군가가 미리 알려줬다면… 누군가가  더 의견을 내줬다면 조금만 선택을 쉽게 할 수 있도록 도왔다면...<br />
                    조금만…조금만…. 하면서 도움을 줄 새도 없이 사라지는 기업을 많이 보았습니다. <br />
                    아이템도 중요하지만 실행이 더 중요하고, 실행도 중요하지만 어떤 사람이 어떤 아이템으로 실행할 것인가가 <br />
                    더 중요하다는 스타트업 현장에서 살고 있고, 스타트업 현장을 보고 있습니다.<br />
                    몇년이나 노력했다가 무너지는 사업이 더이상 생기지 않도록 <br />
                    시작할때도 좋은 시작할 수 있도록 하나씩 함께 만들어가고 싶습니다.
                    </p>
                  </div>
                  
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-44">
        <div className="pb-16 lg:pb-0 lg:z-10 lg:relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-7 lg:gap-8">
            <div className="relative lg:col-span-2">
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                <div className="aspect-w-10 aspect-h-6 overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                  <img
                    className="object-cover lg:h-96 lg:w-96"
                    src={Shin}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className=" lg:m-0 lg:col-span-5 lg:pl-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:max-w-none">
                <blockquote>
                  <div>
                    <div className="mt-5 lg:mt-2 text-2xl lg:text-4xl text-blue-900 mb-7 font-bold">신태순 강사님
                      <span className="ml-3 text-sm lg:text-xl"> (주) 버터플라이인베스트먼트 대표</span>
                    </div>
                    <svg
                      className="h-6 w-6 text-black opacity-100 mt-3"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="mt-3 text-lg lg:text-lg font-medium text-black">
                    <p>인생에 한번은 창업을 해야 생존할 수 있는 시대가 온 것 같습니다.</p>

                    그래서 창업과 관련된 강의도 많아지고 여기저기 아이디어도 넘쳐나는 것을 목격하게 됩니다. <br />

                    그와중에 재밌게 사업을 잘하는 분도 계시지만, 돈을 전혀 벌지 못하거나 돈을 벌더라도 치열한 경쟁에 치여서 행복하지 않는 경우도 자주 보게 됩니다. <br />

                    저는 이왕하는 창업을 즐겁게 오래 할 수 없을까 고민해오고 실험했던 사람입니다. <br />
                    
                    그래서 경쟁하지 않으면서, 창업자의 성장을 기반으로 하는 가이드를 하면서 창업자분들을 만나왔습니다.  <br />

                    이제 치열한 경쟁에서 싸우고 이기는 전략만으로는  경쟁력을 갖추기 어렵습니다.<br />

                    좋은 아이템, 좋은 팀, 좋은 투자가 즐거운 결과물로 맺어지고 경쟁에서 초월하기 위해서는 창업자의 관점 변화와 기업가 정신에 대한 이해가 필요합니다. <br />
                    이와 관련된 마인드셋과 거기서 파생된 선진화된  마케팅 전략에 대해 공유하고 싶습니다. <br />
                    </p>
                  </div>
                  
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-44">
        <div className="pb-16 lg:pb-0 lg:z-10 lg:relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-7 lg:gap-8">
            <div className="relative lg:col-span-2">
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                <div className="aspect-w-10 aspect-h-6 overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                  <img
                    className="object-fit lg:h-96 lg:w-80"
                    src={Lee}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className=" lg:m-0 lg:col-span-5 lg:pl-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:max-w-none">
                <blockquote>
                  <div>
                    <div className="lg:mt-10 mt-5 text-2xl lg:text-4xl text-blue-900 mb-7 font-bold">이원엽 강사님
                      <span className="ml-3 text-xl"> 먼슬리씽 대표</span>
                    </div>
                    <svg
                      className="h-6 w-6 text-black opacity-100 mt-5 lg:mt-16"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="mt-3 text-lg font-medium text-black">
                    <p className="text-2xl mb-10 lg:mb-14">인생의 삽질을 전략적으로!</p>
                      우리는 누구나 시행착오라는 것을 하죠. 저의 언어로는 삽질을 통해 배운다고 말씀드리고 싶어요.<br />
                      하지만 한 삽을 뜰 때마다 모래성이 무너지지 않고 더욱 단단해진다면 어떨까요? <br />
                      수 많은 삽질로 단련된 실전 근육으로 모래성을 견고하고 오랫동안 보전하도록 함께 만들어봐요.<br />
                    </p>
                  </div>
                  
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-44 mb-44">
        <div className="pb-16 lg:pb-0 lg:z-10 lg:relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-7 lg:gap-8">
            <div className="relative lg:col-span-2">
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                <div className="aspect-w-10 aspect-h-6 overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                  <img
                    className="object-cover lg:h-90 lg:w-full"
                    src={Je}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className=" lg:m-0 lg:col-span-5 lg:pl-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:max-w-none">
                <blockquote>
                  <div>
                    <div className="mt-5 lg:mt-8 text-2xl lg:text-4xl text-blue-900 mb-7 font-bold">제준호 강사님 
                      <span className="w-full text-xl ml-3 lg:text-xl">( 사진 바꿀 예정 )</span>
                    </div>
                    <svg
                      className="h-6 w-6 text-black opacity-100 mt-3"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="mt-3 text-lg font-medium text-black">
                    안녕하세요. 저는 컴퓨터공학과를 전공해서 줄곧 개발의 길만 걸어왔습니다. <br />
                    그래서 그런지 창업이 저와는 무관한 거리가 먼 일이고, 또 창업은 똑똑한 사람만이 할 수 있다라고 생각해왔습니다.<br /><br />

                    그렇게 직장인으로의 삶 4년차, 직장인의 월급으로는 도저히 미래가 안보인다는 것을 깨닫는 순간 제가 감히 무모하게 창업이라는 것을 공부하기 시작했습니다.
                     관련 책을 수십,수백권을 읽고 현실에 적용시켜가며 실패의 연속을 맛보았고, 지금도 계속 진행 중입니다. 하지만 점점 성장하고 있는 저이기에 방향성을 잡고 달려가고 있는 중입니다.<br /><br />

                    저는 저와 같이 창업은 나와 거리가 멀다라고 느끼거나 두려움을 가지신 분들에게 결코 창업은 남의 일이 아니라는 것을 알려드리고 올바른 방향으로 갈 수 있도록 도와드리고 싶습니다.<br />

                    또 요즘 창업에 있어서 빼놓을 수 없는 웹,앱 개발적인 부분도 도움을 드리고 싶습니다.
                    </p>
                  </div>
                  
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
