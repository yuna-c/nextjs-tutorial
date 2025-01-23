import Link from 'next/link'

const HomePage = () => {
  return (
    <div className="bg-fuchsia-200 w-96 mt-3.5 hover:bg-pink-500 transition-all duration-500 lg:bg-orange-500">
      <h1 className="text-7xl">HomePage</h1>
      <Link href="/about" className="text-xl text-blue-500 inline-block my-8">
        about page
      </Link>

      <ul className="flex gap-3 flex-row-reverse">
        <li className="p-10 border border-fuchsia-800">1</li>
        <li className="p-10 border border-fuchsia-800">2</li>
        <li className="p-10 border border-fuchsia-800">3</li>
      </ul>
    </div>
  )
}
export default HomePage
