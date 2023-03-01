import Login from '../components/login/Login';
import Signup from '../components/login/Signup';

import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function page() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <section className="pt-20 md:pt-10 px-5 navBreak:px-1  xl:max-w-[90%] mx-auto mb-4">
      <div className="md:flex md:justify-between md:items-center md:gap-4 md:mx-auto">
        {session?.user?.name}
        <Login />
        <Signup />
      </div>
    </section>
  );
}
