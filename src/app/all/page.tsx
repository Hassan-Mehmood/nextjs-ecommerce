"use client";
import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { ProductGrid } from "./components/ProductGrid";
import { RefineSpec } from "./components/RefineSpec";
import { SortSpec } from "./components/SortSpec";

export default function all() {
  const [refineSection, setRefineSection] = useState(false);
  const [sortSection, setSortSection] = useState(false);

  return (
    <section className="mx-4 flex flex-col lg:flex-row lg:mt-10 tracking-wider space-x-16 px-20">
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
        {refineSection && <RefineSpec />}
        {sortSection && <SortSpec />}
      </aside>
      <main>
        <ProductGrid />
      </main>
    </section>
  );
}
