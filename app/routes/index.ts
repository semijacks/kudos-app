import { LoaderFunction, redirect } from 'remix';
import { requireUserId } from '../utils/auth.server';

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  return redirect('/home');
};
