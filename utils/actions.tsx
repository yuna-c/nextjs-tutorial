'use server'
import { readFile, writeFile } from 'fs/promises'
// 서버 전용 유틸 함수
import { revalidatePath } from 'next/cache' //캐시 무효화, 해당 경로를 다시 렌더링(SSR/ISR 재실행)
// import { redirect } from 'next/navigation' //서버 액션 또는 서버 컴포넌트에서 리다이렉트 경로 이동(페이지 전환)

type User = {
  id: string
  firstName: string
  lastName: string
}

export const createUser = async (prevState: any, formData: FormData) => {
  'use server'
  console.log(prevState)

  await new Promise((resolve) => setTimeout(resolve, 3000))

  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  const newUser: User = { firstName, lastName, id: Date.now().toString() }

  // console.log({ firstName, lastName })

  try {
    // throw new Error('something went wrong...')

    await saveUser(newUser)
    revalidatePath('/actions')
    // some logic
    return 'user created successfully...'
  } catch (error) {
    console.log(error)
    return 'failed to create user...'
  }

  // redirect('/')
  // revalidatePath('/actions')
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

export const deleteUser = async (formData: FormData) => {
  const id = formData.get('id') as string
  const users = await fetchUsers()
  const updateUsers = users.filter((user) => user.id !== id)
  await writeFile('users.json', JSON.stringify(updateUsers))
  revalidatePath('/actions')
}

export const removeUser = async (formData: FormData) => {}
