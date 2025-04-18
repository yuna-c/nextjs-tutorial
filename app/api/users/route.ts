import { fetchUsers, saveUser } from '@/utils/actions'

export const GET = async () => {
  const users = await fetchUsers()
  // return Response.json({ msg: 'api route' })
  return Response.json({ users })
}
