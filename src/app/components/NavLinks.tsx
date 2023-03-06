'use client';
import Link from 'next/link';
import { BsSuitHeart } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GrClose } from 'react-icons/gr';
import { Lato } from '@next/font/google';
import { useState } from 'react';

const lato = Lato({
  subsets: [],
  weight: '400',
});

const navLinks = [
  { name: "WHAT'S NEW", href: '' },
  { name: 'ALL', href: '/all' },
  { name: 'DRESSES', href: '' },
  { name: 'CLASSICS', href: '' },
  { name: 'ATHLETIC', href: '' },
  { name: 'CAMPAIGN', href: '' },
  { name: 'SUSTAINABLE', href: '' },
  { name: 'JOURNAL', href: '' },
];

export default function NavLinks() {
  const [showNavbarMenu, setShowNavbarMenu] = useState(false);
  return (
    <>
      <ul
        className={
          showNavbarMenu === false
            ? `hidden navBreak:flex flex-wrap ${lato.className}`
            : `absolute left-0 px-5 top-14 right-0 border border-t-black border-b-0 border-l-0 border-r-0 navBreak:flex navBreak:static navBreak:border-none flex-wrap bg-white ${lato.className}`
        }
      >
        {navLinks.map((navLink) => (
          <li key={navLink.name} className="navbar__navLink">
            <Link href={navLink.href}>{navLink.name}</Link>
          </li>
        ))}
      </ul>
      <div className="navBreak:hidden" onClick={() => setShowNavbarMenu(!showNavbarMenu)}>
        {showNavbarMenu === false ? (
          <RxHamburgerMenu className={'mr-2 cursor-pointer'} size={24} />
        ) : (
          <GrClose className={'mr-2 cursor-pointer'} size={24} />
        )}
      </div>
      <BsSuitHeart className="cursor-pointer navBreak:hidden" size={24} />
    </>
  );
}
