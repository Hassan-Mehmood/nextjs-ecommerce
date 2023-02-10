import React, { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

export const RefineSpec = () => {
  const [sizeSection, setSizeSection] = useState(true);
  const [priceSection, setPriceSection] = useState(true);

  return (
    <>
      <section className=" border-b border-black lg:border-b-0 lg:w-48 lg:block">
        <hr className="invisible lg:visible" />
        <div
          className="cursor-pointer py-3 flex justify-between items-center px-4 border border-black lg:border-0 lg:px-0"
          onClick={() => setSizeSection(!sizeSection)}
        >
          <h4 className="text-sm tracking-wider">SIZE</h4>
          {sizeSection ? <FiMinus className="text-xs" /> : <FiPlus className="text-xs" />}
        </div>
        {sizeSection && (
          <div className="py-4 grid grid-cols-2 gap-y-2 px-4 border-x border-black lg:border-x-0 lg:px-0">
            <div className="flex items-center">
              <input
                id="xs"
                type="checkbox"
                className="appearance-none cursor-pointer bg-gray-300 w-4 h-4 checked:bg-black"
              />
              <label htmlFor="xs">
                <h3 className="text-xs cursor-pointer px-2">XS</h3>
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="sm"
                type="checkbox"
                className="appearance-none cursor-pointer bg-gray-300 w-4 h-4 checked:bg-black"
              />
              <label htmlFor="sm">
                <h3 className="text-xs cursor-pointer px-2">SM</h3>
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="md"
                type="checkbox"
                className="appearance-none cursor-pointer bg-gray-300 w-4 h-4 checked:bg-black"
              />
              <label htmlFor="md">
                <h3 className="text-xs cursor-pointer px-2">MD</h3>
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="lg"
                type="checkbox"
                className="appearance-none cursor-pointer bg-gray-300 w-4 h-4 checked:bg-black"
              />
              <label htmlFor="lg">
                <h3 className="text-xs cursor-pointer px-2">LG</h3>
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="xl"
                type="checkbox"
                className="appearance-none cursor-pointer bg-gray-300 w-4 h-4 checked:bg-black"
              />
              <label htmlFor="xl">
                <h3 className="text-xs cursor-pointer px-2">XL</h3>
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="xxl"
                type="checkbox"
                className="appearance-none cursor-pointer bg-gray-300 w-4 h-4 checked:bg-black"
              />
              <label htmlFor="xxl">
                <h3 className="text-xs cursor-pointer px-2">XXL</h3>
              </label>
            </div>
          </div>
        )}
      </section>
      <section className="border-b border-black lg:border-b-0 lg:w-48 lg:block">
        <hr className="invisible lg:visible" />
        <div
          className="py-3 flex justify-between items-center px-4 border border-black lg:border-0 lg:px-0 cursor-pointer"
          onClick={() => setPriceSection(!priceSection)}
        >
          <h2 className="text-sm">PRICE</h2>
          {priceSection ? <FiMinus className="text-xs" /> : <FiPlus className="text-xs" />}
        </div>
        {priceSection && (
          <div className="flex flex-col space-y-2 py-4 px-4 border-x border-black lg:border-x-0 lg:px-0">
            <input type={'number'} min={0} placeholder="Min." className="text-sm outline-none" />
            <input type={'number'} placeholder="Max." className="text-sm outline-none" />
            <button className="text-sm ">UPDATE</button>
          </div>
        )}
      </section>
    </>
  );
};
