"use client";
import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FiMinus, FiPlus } from "react-icons/fi";
import { RefineSpec } from "./RefineSpec";
import { SortSpec } from "./SortSpec";
export default function all() {
  const [refineSection, setRefineSection] = useState(false);
  const [sortSection, setSortSection] = useState(false);

  return (
    <section className="mx-4 flex flex-col lg:flex-row lg:mt-10 tracking-wider">
      <aside className="mt-20 lg:mt-0">
        <h1 className=" text-2xl font-light text-center pb-6 lg:text-3xl lg:text-left">
          CLASSICS
        </h1>
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
        {/* <section className="hidden border-b border-black lg:border-b-0 lg:block">
          <hr className="invisible lg:visible" />
          <div
            className="flex justify-between items-center py-3 px-4 border border-black lg:border-0 lg:px-0 cursor-pointer"
            onClick={() => setSortSectionSm(!sortSectionSm)}
          >
            <h2 className="text-sm">SORT BY</h2>
            {sortSectionSm ? (
              <FiMinus className="text-xs" />
            ) : (
              <FiPlus className="text-xs" />
            )}
          </div>
          {sortSectionSm && (
            <div className="py-4 px-4 space-y-2 border-x border-black lg:border-x-0 lg:px-0">
              <div className="flex space-x-2 items-center">
                <input
                  type="checkbox"
                  className="appearance-none bg-gray-300 w-4 h-4 checked:bg-black"
                />
                <h3 className="text-xs">PRICE: ASCENDING</h3>
              </div>
              <div className="flex space-x-2 items-center">
                <input
                  type="checkbox"
                  className="appearance-none bg-gray-300 w-4 h-4 checked:bg-black"
                />
                <h3 className="text-xs">PRICE: DESCENDING</h3>
              </div>
            </div>
          )}
        </section> */}
        {refineSection && <RefineSpec />}

        {sortSection && <SortSpec />}
      </aside>
      <main>bye</main>
    </section>
  );
}
