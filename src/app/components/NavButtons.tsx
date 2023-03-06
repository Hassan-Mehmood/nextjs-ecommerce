'use client';
import { signIn, signOut } from 'next-auth/react';
import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsBag, BsSuitHeart } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FiLogOut } from 'react-icons/fi';

export default function NavButtons({ session }: any) {
  return (
    <>
      <button>
        {session === null ? (
          <CgProfile size={24} className="mr-2 cursor-pointer" onClick={() => signIn()} />
        ) : (
          <FiLogOut size={24} className="mr-2 cursor-pointer" onClick={() => signOut()} />
        )}
      </button>
      <button>
        <BsSuitHeart className="hidden navBreak:block mr-2 cursor-pointer" size={24} />
      </button>
      <button>
        <BsBag className="hidden navBreak:block mr-2 cursor-pointer" size={24} />
      </button>
      <button>
        <BiSearch className="cursor-pointer" size={24} />
      </button>
    </>
  );
}
