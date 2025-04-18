export function middleware() {
  // console.log('hello crise')
  return Response.json({ msg: 'hello crise' })
}

export const config = {
  matcher: '/about'
}
