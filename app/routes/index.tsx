import { requireUserId } from '../utils/auth.server';
import { LoaderFunction } from 'remix';

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  return null;
};

export default function Index() {
  return (
    <div className='h-screen w-full bg-slate-600'>
      <h2 className='font-bold text-5xl text-blue-400'>TailwindCSS Works!!</h2>
    </div>
  );
}
