"use client";
import Image from "next/image";
import { productsData } from "@/JSONData/productsData";
import React, { useState } from "react";
import { ProductDetails } from "./ProductDetails";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export const ProductDisplay = ({
  params,
}: {
  params: { productId: string };
}) => {
  const [currentCarousel, setCurrentCarousel] = useState(0);

  return (
    <div className="md:px-24 lg:flex justify-center items-center">
      {productsData.map((product, index) => {
        if (product.id == params.productId) {
          return (
            <div key={index} className="lg:flex lg:items-center lg:space-x-16">
              <div className="relative flex">
                <button
                  className="absolute top-0 bottom-0 m-auto"
                  disabled={currentCarousel <= 0}
                  onClick={() => {
                    setCurrentCarousel((prev) => --prev);
                  }}
                >
                  <BsChevronLeft
                    className={`${
                      currentCarousel <= 0 ? "text-gray-400" : "text-black"
                    } text-lg`}
                  />
                </button>
                <Image
                  src={product.source[currentCarousel]}
                  alt="productImage"
                  width="0"
                  height="0"
                  sizes="120vw"
                  className="w-full h-auto mt-20 lg:mt-0"
                />
                <button
                  disabled={currentCarousel >= productsData.length - 1}
                  className="absolute top-0 bottom-0  right-0 m-auto"
                  onClick={() => {
                    setCurrentCarousel((prev) => ++prev);
                  }}
                >
                  <BsChevronRight
                    className={`${
                      currentCarousel >= productsData.length - 1
                        ? "text-gray-400"
                        : "text-black"
                    } text-lg`}
                  />
                </button>
              </div>
              <ProductDetails {...product} />
            </div>
          );
        }
      })}
    </div>
  );
};
