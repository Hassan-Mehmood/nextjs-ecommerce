'use client';
import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';
import { BsSuitHeart, BsBag } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GrClose } from 'react-icons/gr';
import { Lato } from '@next/font/google';
import { useState } from 'react';
import Image from 'next/image';

const lato = Lato({
  subsets: [],
  weight: '400',
});

const Navbar = () => {
  const [showNavbarMenu, setShowNavbarMenu] = useState(false);

  return (
    <nav className="flex justify-center items-center relative mx-auto px-5 navBreak:px-1 min-h-[60px] max-w-7xl bg-white ">
      <div className="flex flex-1 text-xs ">
        <ul
          className={
            showNavbarMenu === false
              ? `hidden navBreak:flex flex-wrap ${lato.className}`
              : `absolute left-0 px-5 top-14 right-0 border border-t-black border-b-0 border-l-0 border-r-0 navBreak:flex navBreak:static navBreak:border-none flex-wrap bg-white ${lato.className}`
          }
        >
          <li className="navbar__navLink">
            <Link href="">WHAT&apos;S NEW</Link>
          </li>
          <li className="navbar__navLink">
            <Link href="">WOMEN</Link>
          </li>
          <li className="navbar__navLink">
            <Link href="">DRESSES</Link>
          </li>
          <li className="navbar__navLink">
            <Link href="">CLASSICS</Link>
          </li>
          <li className="navbar__navLink">
            <Link href="">ATHLETIC</Link>
          </li>
          <li className="navbar__navLink">
            <Link href="">CAMPAIGN</Link>
          </li>
          <li className="navbar__navLink">
            <Link href="">SUSTAINABLE</Link>
          </li>
          <li className="navbar__navLink">
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
      <div className="mx-8">
        <Image
          src="/logo.webp"
          alt=""
          width="0"
          height="0"
          sizes="50vw"
          className="w-full h-auto max-h-[24px] cursor-pointer"
        />
      </div>
      <div className="flex flex-1 justify-end">
        <CgProfile size={24} className="mr-2 cursor-pointer" />
        <BsSuitHeart className="hidden navBreak:block mr-2 cursor-pointer" size={24} />
        <BsBag className="hidden navBreak:block mr-2 cursor-pointer" size={24} />
        <BiSearch className="cursor-pointer" size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
