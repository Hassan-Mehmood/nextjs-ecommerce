import Link from 'next/link';
import Image from 'next/image';
import NavLinks from './NavLinks';
import NavButtons from './NavButtons';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <nav className="flex justify-center items-center fixed left-0 right-0 z-10 navBreak:static mx-auto px-5 navBreak:px-1 min-h-[60px] xl:max-w-[90%] bg-white ">
      <div className="flex flex-1 text-xs ">
        <NavLinks />
      </div>
      <div className="mx-8">
        <Link href={'/'}>
          <Image
            src="/logo.webp"
            alt=""
            width="0"
            height="0"
            sizes="50vw"
            className="w-full h-auto max-h-[24px] cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex flex-1 justify-end">
        <NavButtons session={session} />
      </div>
    </nav>
  );
};

export default Navbar;
