'use client'

function error({ error }: { error: Error }) {
  console.log(error)

  return <div>page Error...</div>
}

export default error
