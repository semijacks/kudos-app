import { User } from '@prisma/client';
import { UserCircle } from './user-circle';

interface Props {
  users: User[];
}

export function UserPanel({ users }: Props) {
  return (
    <div className='w-1/6 bg-gray-200 flex flex-col'>
      <div className='text-center bg-gray-300 h-20 flex items-center justify-center'>
        <h2 className='text-xl text-blue-600 font-semibold'>My Team</h2>
      </div>
      <div className='flex-1 overflow-y-scroll py-4 flex flex-col gap-y-10'>
        {users.map((user) => (
          <UserCircle
            profile={user.profile}
            key={user.id}
            className='h-24 w-24 mx-auto flex-shrink-0'
          />
        ))}
      </div>
      <div className='text-center p-6 bg-gray-300'>
        <form method='post' action='/logout'>
          <button
            type='submit'
            className='rounded-xl bg-yellow-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400'
          >
            Sign Out
          </button>
        </form>
      </div>
    </div>
  );
}
