import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';
import { BsSuitHeart, BsBag } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center container mx-auto px-5 min-h-[60px]">
      <div className="flex">
        <ul className="hidden">
          <li>
            <Link href="">WHAT&apos;S NEW</Link>
          </li>
          <li>
            <Link href="">WOMEN</Link>
          </li>
          <li>
            <Link href="">DRESSES</Link>
          </li>
          <li>
            <Link href="">CLASSICS</Link>
          </li>
          <li>
            <Link href="">ATHLETIC</Link>
          </li>
          <li>
            <Link href="">CAMPAIGN</Link>
          </li>
          <li>
            <Link href="">SUSTAINABLE</Link>
          </li>
          <li>
            <Link href="">JOURNAL</Link>
          </li>
        </ul>
        <RxHamburgerMenu className="mr-2 cursor-pointer" size={24} />
        <BsSuitHeart className="cursor-pointer" size={24} />
      </div>
      <div>
        <h1 className="text-xl cursor-pointer">BOHEMIAN TRADERS</h1>
      </div>
      <div className="flex">
        <CgProfile size={24} className="mr-2 cursor-pointer" />
        <BsSuitHeart className="hidden cursor-pointer" />
        <BsBag className="hidden cursor-pointer" />
        <BiSearch className="cursor-pointer" size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
