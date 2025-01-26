'use client'
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center w-[100px]">
      <p className="text-5xl">{count}</p>
      <div className="flex flex-row gap-2 mt-2">
        <button onClick={() => setCount(count + 1)} className="bg-blue-500 rounded text-white px-4 py-2">
          +
        </button>
        <button onClick={() => setCount(count - 1)} className="bg-blue-500 rounded text-white px-4 py-2">
          -
        </button>
      </div>
    </div>
  )
}
