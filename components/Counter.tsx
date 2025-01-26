'use client'
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    if (count < 100) {
      setCount(count + 1)
    }
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    } else {
      alert('0은 안됌')
    }
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div className="flex flex-col items-center">
      <p className="text-5xl">{count}</p>
      <div className="flex flex-row gap-2 mt-2">
        <button onClick={increment} className="bg-blue-500 rounded text-white px-4 py-2">
          +
        </button>
        <button onClick={decrement} className="bg-blue-500 rounded text-white px-4 py-2">
          -
        </button>
        <button onClick={reset} className="bg-red-500 rounded text-white px-4 py-2">
          초기화
        </button>
      </div>
    </div>
  )
}
