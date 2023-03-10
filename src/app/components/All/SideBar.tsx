'use client';
import React from 'react';
import { useState } from 'react';
import { RefineSpec } from './RefineSpec';
import { SortSpec } from './SortSpec';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
export const SideBar = () => {
  const [refineSection, setRefineSection] = useState(false);
  const [sortSection, setSortSection] = useState(false);
  return (
    <>
      <section className="grid grid-cols-2 border border-black lg:hidden">
        <div
          className="flex justify-between items-center border-r border-black py-3 px-4 cursor-pointer"
          onClick={() => setRefineSection(!refineSection)}
        >
          <h2 className="text-sm">REFINE</h2>
          {refineSection ? (
            <IoIosArrowUp className="text-xs" />
          ) : (
            <IoIosArrowDown className="text-xs" />
          )}
        </div>
        <div
          className="flex justify-between items-center py-3 px-4 cursor-pointer"
          onClick={() => setSortSection(!sortSection)}
        >
          <h2 className="text-sm">SORT</h2>
          {sortSection ? (
            <IoIosArrowUp className="text-xs" />
          ) : (
            <IoIosArrowDown className="text-xs" />
          )}
        </div>
      </section>
      <div className="hidden lg:block">
        <RefineSpec />
        <SortSpec />
      </div>
      {refineSection && <RefineSpec />}
      {sortSection && <SortSpec />}
    </>
  );
};
