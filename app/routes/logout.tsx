import { ActionFunction, LoaderFunction, redirect } from 'remix';
import { logout } from '../utils/auth.server';

export const action: ActionFunction = async ({ request }) => logout(request);
export const loader: LoaderFunction = async () => redirect('/');
