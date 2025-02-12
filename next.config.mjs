/** @type {import('next').NextConfig} */
// domains vs remotePatterns
const nextConfig = {
  // images: {
  //   domains: ["www.course-api.com"], // ✅ 특정 도메인의 모든 이미지 허용
  // },

  images: {
    remotePatterns: [
      {
        protocol: 'https', // ✅ HTTP/HTTPS 명확하게 설정 가능
        hostname: 'www.course-api.com', // ✅ 특정 호스트만 허용(보안 우수)
        port: '', // ✅ 특정 포트만 허용 가능 (일반적으로 생략)
        pathname: '/images/**' // ✅ 특정 경로 패턴만 허용 가능
      }
    ]
  }
}

export default nextConfig
