'use client';
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const productImages = ['/modalPic.jpg', '/modalPic1.jpg'];

export default function MobileCarousel() {
  const [productImageNumber, setProductImageNumber] = useState(0);

  return (
    <div className="relative w-full h-auto sm:hidden">
      <button
        className="absolute top-0 bottom-0 m-auto disabled:text-gray-400"
        disabled={productImageNumber <= 0}
        onClick={() => {
          setProductImageNumber((current) => --current);
        }}
      >
        <AiOutlineArrowLeft size={32} />
      </button>
      <div className="">
        <Image
          src={productImages[productImageNumber]}
          alt="productImage"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full md:mt-8 lg:mt-0"
        />
      </div>
      <button
        className="absolute top-0 bottom-0 right-0 m-auto disabled:text-gray-400"
        disabled={productImageNumber >= productImages.length - 1}
        onClick={() => {
          setProductImageNumber((current) => ++current);
        }}
      >
        <AiOutlineArrowRight size={32} className="" />
      </button>
    </div>
  );
}
