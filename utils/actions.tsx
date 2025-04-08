'use server'
import { readFile, writeFile } from 'fs/promises'
// 서버 전용 유틸 함수
import { revalidatePath } from 'next/cache' //캐시 무효화, 해당 경로를 다시 렌더링( (SSR/ISR 재실행)

type User = {
  id: string
  firstName: string
  lastName: string
}

export const createUser = async (formData: FormData) => {
  'use server'
  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  const newUser: User = { firstName, lastName, id: Date.now().toString() }

  // console.log({ firstName, lastName })
  await saveUser(newUser)
  revalidatePath('/actions')
}

export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile('users.json', { encoding: 'utf8' })
  const users = result ? JSON.parse(result) : []
  return users
}

const saveUser = async (user: User) => {
  const users = await fetchUsers()
  users.push(user)
  await writeFile('users.json', JSON.stringify(users))
}
