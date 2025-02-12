import mapsImg from '@/images/image.jpeg'
import Image from 'next/image'
const url = 'https://www.course-api.com/images/tours/tour-1.jpeg'

function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className="text-4xl">ID : {params.id}</h1>
      <section className="flex gap-x-4 mt-4">
        {/* 
          local image
          원본 이미지 크기이기 때문에 용량이 커짐, 캐싱 느림
          w/h 추가시 용량 최적화 가능
          Largest Contentful Paint (LCP) 최적화 권상 사항 뜸 = priority (preload처리)
          Next.js의 자동 이미지 최적화를 비활성화 = unoptimized
          빠른 페이지 로딩 기본 적용 (뷰포트 진입 시 로드됨, 옵션으로 블러(blur-up) 플레이스홀더) = lazy loading
          원격 서버의 이미지도 필요에 따라 실시간으로 크기 조정 가능
        */}
        <div>
          <Image src={mapsImg} alt="maps" priority width={192} height={192} className="w-48 h-48 object-cover rounded"></Image>
          <h2>local Image</h2>
        </div>
        {/* 
          remote image 
          기본 보안 설정으로 인해 **외부 이미지(호스트가 다른 URL)**를 사용할 경우, next.config.js에서 해당 도메인을 허용
        */}
        <div>
          <Image src={url} alt="tour" width={192} height={192} priority className="w-48 h-48 object-cover rounded"></Image>
          <h2>remote Image</h2>
        </div>
      </section>
    </div>
  )
}

export default page
