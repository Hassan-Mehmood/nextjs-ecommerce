'use client';
import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';
import { BsSuitHeart, BsBag } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';

const Navbar = () => {
  const [showNavbarMenu, setShowNavbarMenu] = useState(false);

  return (
    <nav className="flex justify-between items-center container mx-auto px-5 min-h-[60px]">
      <div className="flex ">
        <ul
          className={
            showNavbarMenu === false ? 'hidden' : 'absolute left-0 px-5 top-16 right-0 text-xs'
          }
        >
          {/* absolute left-0 px-5 top-16 right-0 text-xs */}
          <li className="py-4 cursor-pointer hover:text-slate-700">
            <Link href="">WHAT&apos;S NEW</Link>
          </li>
          <li className="py-4 cursor-pointer hover:text-slate-700">
            <Link href="">WOMEN</Link>
          </li>
          <li className="py-4 cursor-pointer hover:text-slate-700">
            <Link href="">DRESSES</Link>
          </li>
          <li className="py-4 cursor-pointer hover:text-slate-700">
            <Link href="">CLASSICS</Link>
          </li>
          <li className="py-4 cursor-pointer hover:text-slate-700">
            <Link href="">ATHLETIC</Link>
          </li>
          <li className="py-4 cursor-pointer hover:text-slate-700">
            <Link href="">CAMPAIGN</Link>
          </li>
          <li className="py-4 cursor-pointer hover:text-slate-700">
            <Link href="">SUSTAINABLE</Link>
          </li>
          <li className="py-4 cursor-pointer hover:text-slate-700">
            <Link href="">JOURNAL</Link>
          </li>
        </ul>
        <RxHamburgerMenu
          className="mr-2 cursor-pointer"
          size={24}
          onClick={() => setShowNavbarMenu(!showNavbarMenu)}
        />
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
