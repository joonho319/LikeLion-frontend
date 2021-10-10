

export const ScoopDesktopFooter = () => {
  return (
    <div className="w-8/12 mx-auto hidden md:grid mb-16"> 
      <div className=" bg-gray-600" style={{height:"1px"}}></div>
      <div className="grid grid-cols-2 gap-2">
        <div className="pl-4 mt-5">
          <div>주식회사 스쿱하우스</div>
          <div>사업자 번호 : 308-12-345</div>
          <div>주소 : 우리은하 태양계 화성 안드로메다국 제인슨구 처신동 나사아파트</div>
          <div>전화 : 02-234-5667</div>
          <div>이메일 : support@scoop.house</div>
          <div className="mt-10">2021 @ All rights reserved by scoop house</div>
        </div>
        <div className="grid grid-cols-3 mt-16 text-xl font-bold">
          <div>회사소개</div>
          <div>스쿠퍼로 신청하기</div>
          <div>자주하는 질문</div>
        </div>
      </div>
    </div>
  )
}