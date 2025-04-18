import { deleteUser, removeUser } from '@/utils/actions'

function DeleteButton({ id }: { id: string }) {
  return (
    <form action={deleteUser}>
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="bg-red-500 text-white text-sx rounded p-2">
        delete
      </button>
    </form>
  )
}

export default DeleteButton
