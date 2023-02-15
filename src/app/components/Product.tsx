'use client';
import { Work_Sans } from '@next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import ProductModal from './ProductModal';

const work_sans = Work_Sans({
  subsets: [],
  weight: '500',
});

interface Tproduct {
  product: {
    img: string;
    text: string;
    price: number;
  };
}

export default function Product({ product }: Tproduct) {
  const [showProductDescription, setShowProductDescription] = useState(false);
  const [productImageNumber, setProductImageNumber] = useState(0);

  return (
    <>
      <div className="px-4 my-4">
        <div className="group relative">
          <div className="absolute flex justify-center items-center w-full h-full opacity-0 group-hover:opacity-100 transition-opacity ">
            <button
              className="bg-white px-4 py-2 border"
              onClick={() => setShowProductDescription(true)}
            >
              Quick View
            </button>
          </div>
          <Image
            src={product.img}
            alt=""
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
        <Link href={`/${product.text}`}>
          <div>
            <p
              className={`${work_sans.className} text-xs lg:text-base tracking-widest leading-5 mb-4`}
            >
              {product.text}
            </p>
            <p className={`${work_sans.className} text-xs lg:text-base`}>${product.price}</p>
          </div>
        </Link>
      </div>
      {showProductDescription ? (
        <ProductModal
          productImageNumber={productImageNumber}
          setProductImageNumber={setProductImageNumber}
          setShowProductDescription={setShowProductDescription}
        />
      ) : null}
    </>
  );
}
