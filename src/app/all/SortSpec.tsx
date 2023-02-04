import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

export const SortSpec = () => {
  const [sortSectionSm, setSortSectionSm] = useState(true);

  return (
    <section className="border-b border-black lg:border-b-0">
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
          </section>
  )
}
