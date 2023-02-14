'use client';
import Image from 'next/image';
import { Work_Sans } from '@next/font/google';
import { useState } from 'react';
import ProductModal from './ProductModal';
import Link from 'next/link';

const work_sans = Work_Sans({
  subsets: [],
  weight: '500',
});

// These are here just temporarily because we will change it with data from our database
const products = [
  {
    img: '/product1.jpg',
    text: 'Genoa Mini Dress in Mid Blue Wash Denim',
    price: 278,
  },
  {
    img: '/product3.jpg',
    text: 'Genoa Mini Dress in Mid Blue Wash Denim',
    price: 199,
  },
  {
    img: '/product2.jpg',
    text: 'Genoa Mini Dress in Mid Blue Wash Denim',
    price: 78,
  },
  {
    img: '/product4.jpg',
    text: 'Genoa Mini Dress in Mid Blue Wash Denim',
    price: 78,
  },
];

const Product = () => {
  const [showProductDescription, setShowProductDescription] = useState(false);
  const [productImageNumber, setProductImageNumber] = useState(0);

  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-8 mx-auto max-w-7xl items-center">
      {products.map((product) => (
        <div key={product.img} className="px-4 my-4">
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
      ))}

      {showProductDescription ? (
        <ProductModal
          productImageNumber={productImageNumber}
          setProductImageNumber={setProductImageNumber}
          showProductDescription={showProductDescription}
          setShowProductDescription={setShowProductDescription}
        />
      ) : null}
    </section>
  );
};

export default Product;
