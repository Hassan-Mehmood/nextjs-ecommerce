"use client";
import Image from "next/image";

import { productsData } from "@/JSONData/productsData";
import React, { useState } from "react";
import { ProductDetails } from "./ProductDetails";
import { CarouselSvg } from "./CarouselSvg";

export const ProductDisplay = ({
  params,
}: {
  params: { productId: string };
}) => {
  let [currentCarousel, setCurrentCarousel] = useState(0);
  const leftCarouselSvg = "M15.75 19.5L8.25 12l7.5-7.5";
  const rightCarouselSvg = "M8.25 4.5l7.5 7.5-7.5 7.5";

  return (
    <div className="md:px-24 lg:flex justify-center items-center">
      {productsData.map((product, index) => {
        if (product.id == params.productId) {
          return (
            <div key={index} className="lg:flex lg:items-center lg:space-x-16">
              <div className="relative flex">
                {currentCarousel <= 0 ? (
                  <button className="absolute top-0 bottom-0 m-auto" disabled>
                    <CarouselSvg
                      arrowColor="text-gray-400"
                      pathName={leftCarouselSvg}
                    />
                  </button>
                ) : (
                  <button
                    className="absolute top-0 bottom-0 m-auto"
                    onClick={() => {
                      setCurrentCarousel(--currentCarousel);
                    }}
                  >
                    <CarouselSvg
                      arrowColor="text-black"
                      pathName={leftCarouselSvg}
                    />
                  </button>
                )}

                <Image
                  src={product.source[currentCarousel]}
                  alt="productImage"
                  width="0"
                  height="0"
                  sizes="120vw"
                  className="w-full h-auto mt-20 lg:mt-0"
                />

                {currentCarousel >= productsData.length - 1 ? (
                  <button
                    disabled
                    className="absolute top-0 bottom-0  right-0 m-auto"
                  >
                    <CarouselSvg
                      arrowColor="text-gray-400"
                      pathName={rightCarouselSvg}
                    />
                  </button>
                ) : (
                  <button
                    className="absolute top-0 bottom-0 right-0 m-auto"
                    onClick={() => {
                      setCurrentCarousel(++currentCarousel);
                    }}
                  >
                    <CarouselSvg
                      arrowColor="text-black"
                      pathName={rightCarouselSvg}
                    />
                  </button>
                )}
              </div>
              <ProductDetails {...product} />
            </div>
          );
        }
      })}
    </div>
  );
};
