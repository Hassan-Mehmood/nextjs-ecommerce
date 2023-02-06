import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

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
          {sizeSection ? (
            <FiMinus className="text-xs" />
          ) : (
            <FiPlus className="text-xs" />
          )}
        </div>
        {sizeSection && (
          <div className="py-4 grid grid-cols-2 gap-y-2 px-4 border-x border-black lg:border-x-0 lg:px-0">
            <div className="flex space-x-2 items-center">
              <input
                type="checkbox"
                className="appearance-none bg-gray-300 w-4 h-4 checked:bg-black"
              />
              <h3 className="text-xs">XS</h3>
            </div>
            <div className="flex space-x-2 items-center">
              <input
                type="checkbox"
                className="appearance-none bg-gray-300 w-4 h-4 checked:bg-black"
              />
              <h3 className="text-xs">SM</h3>
            </div>
            <div className="flex space-x-2 items-center">
              <input
                type="checkbox"
                className="appearance-none bg-gray-300 w-4 h-4 checked:bg-blackk"
              />
              <h3 className="text-xs">MD</h3>
            </div>
            <div className="flex space-x-2 items-center">
              <input
                type="checkbox"
                className="appearance-none bg-gray-300 w-4 h-4 checked:bg-black"
              />
              <h3 className="text-xs">LG</h3>
            </div>
            <div className="flex space-x-2 items-center">
              <input
                type="checkbox"
                className="appearance-none bg-gray-300 w-4 h-4 checked:bg-black"
              />
              <h3 className="text-xs">XL</h3>
            </div>
            <div className="flex space-x-2 items-center">
              <input
                type="checkbox"
                className="appearance-none bg-gray-300 w-4 h-4 checked:bg-black"
              />
              <h3 className="text-xs">XXL</h3>
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
          {priceSection ? (
            <FiMinus className="text-xs" />
          ) : (
            <FiPlus className="text-xs" />
          )}
        </div>
        {priceSection && (
          <div className="flex flex-col space-y-2 py-4 px-4 border-x border-black lg:border-x-0 lg:px-0">
            <input
              type={"number"}
              placeholder="Min."
              className="text-sm outline-none"
            />
            <input
              type={"number"}
              placeholder="Max."
              className="text-sm outline-none"
            />
            <button className="text-sm ">UPDATE</button>
          </div>
        )}
      </section>
    </>
  );
};
