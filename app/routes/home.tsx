import { json, LoaderFunction, useLoaderData } from 'remix';
import { requireUserId } from '../utils/auth.server';
import { getOtherUsers } from '../utils/users.server';
import { UserPanel } from '../components/user-panel';
import { Layout } from '../components/layout';

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const users = await getOtherUsers(userId);
  return json({ users });
};

export default function Home() {
  const { users } = useLoaderData();
  return (
    <Layout>
      <div className='h-full flex'>
        <UserPanel users={users} />
      </div>
    </Layout>
  );
}
