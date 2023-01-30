'use client';
import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';
import { BsSuitHeart, BsBag } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GrClose } from 'react-icons/gr';
import { Lato } from '@next/font/google';
import { useState } from 'react';

const lato = Lato({
  subsets: [],
  weight: '400',
});

const Navbar = () => {
  const [showNavbarMenu, setShowNavbarMenu] = useState(false);

  return (
    <nav className="flex justify-between items-center relative mx-auto px-5 min-h-[60px]">
      <div className="flex">
        <ul
          className={
            showNavbarMenu === false
              ? `hidden navBreak:flex  ${lato.className}`
              : `absolute left-0 px-5 top-16 right-0 text-xs border border-t-black border-b-0 border-l-0 border-r-0  ${lato.className}`
          }
        >
          <li className="py-3 cursor-pointer hover:text-slate-700">
            <Link href="">WHAT&apos;S NEW</Link>
          </li>
          <li className="py-3 cursor-pointer hover:text-slate-700">
            <Link href="">WOMEN</Link>
          </li>
          <li className="py-3 cursor-pointer hover:text-slate-700">
            <Link href="">DRESSES</Link>
          </li>
          <li className="py-3 cursor-pointer hover:text-slate-700">
            <Link href="">CLASSICS</Link>
          </li>
          <li className="py-3 cursor-pointer hover:text-slate-700">
            <Link href="">ATHLETIC</Link>
          </li>
          <li className="py-3 cursor-pointer hover:text-slate-700">
            <Link href="">CAMPAIGN</Link>
          </li>
          <li className="py-3 cursor-pointer hover:text-slate-700">
            <Link href="">SUSTAINABLE</Link>
          </li>
          <li className="py-3 cursor-pointer hover:text-slate-700">
            <Link href="">JOURNAL</Link>
          </li>
        </ul>
        <div className="navBreak:hidden" onClick={() => setShowNavbarMenu(!showNavbarMenu)}>
          {showNavbarMenu === false ? (
            <RxHamburgerMenu className={'mr-2 cursor-pointer'} size={24} />
          ) : (
            <GrClose className={'mr-2 cursor-pointer'} size={24} />
          )}
        </div>
        <BsSuitHeart className="cursor-pointer navBreak:hidden" size={24} />
      </div>
      <div>
        <h1 className="text-xl cursor-pointer">BOHEMIAN TRADERS</h1>
      </div>
      <div className="flex">
        <CgProfile size={24} className="mr-2 cursor-pointer" />
        <BsSuitHeart className="hidden navBreak:block mr-2 cursor-pointer" size={24} />
        <BsBag className="hidden navBreak:block mr-2 cursor-pointer" size={24} />
        <BiSearch className="cursor-pointer" size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
