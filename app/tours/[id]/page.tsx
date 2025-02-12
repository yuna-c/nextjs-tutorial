import mapsImg from '@/images/image.jpeg'
import Image from 'next/image'

function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className="text-4xl">ID : {params.id}</h1>
      <section className="flex gap-x-4 mt-4">
        {/* 
          local image
          원본 이미지 크기이기 때문에 용량이 커짐, 캐싱 느림
          w/h 추가시 용량 최적화 가능
          Largest Contentful Paint (LCP) 최적화 권상 사항 뜸 = priority 
        */}
        <div>
          <Image src={mapsImg} alt="maps" priority width={192} height={192} className="w-48 h-48 object-cover rounded"></Image>
          <h2>local Image</h2>
        </div>
        {/* 
          remote image 
          
        */}
        <div></div>
      </section>
    </div>
  )
}

export default page
