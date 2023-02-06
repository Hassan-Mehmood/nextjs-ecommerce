'use client';
import Image from 'next/image';
import { Work_Sans } from '@next/font/google';
import { useState } from 'react';

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

  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-8 mx-auto max-w-7xl items-center">
      {products.map((product) => (
        <div key={product.img} className="px-4 my-4 group relative">
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
          <p
            className={`${work_sans.className} text-xs lg:text-base tracking-widest leading-5 mb-4`}
          >
            {product.text}
          </p>
          <p className={`${work_sans.className} text-xs lg:text-base`}>${product.price}</p>
        </div>
      ))}

      {showProductDescription ? (
        <>
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-80" />
          <div className="bg-white block fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[90%] h-full max-h-[571px] max-w-[1280px] border overflow-hidden">
            <div className="flex">
              <section className="flex h-full">
                <div className="w-[300px] h-full relative">
                  <Image src="/modalPic1.jpg" alt="" fill className="object-contain w-full" />
                </div>
                <div className="w-[300px] h-full relative">
                  <Image src="/modalPic.jpg" alt="" fill className="object-contain w-full" />
                </div>
              </section>
              <section className="">
                <h1>hello</h1>
              </section>
            </div>
          </div>
        </>
      ) : null}
    </section>
  );
};

export default Product;
// <>
//   <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-75" />
//   <section className="bg-white fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[90%] h-[80%] min-h-[571px] border">
//     <div className="grid grid-cols-2 h-full items-center">
//       <div className="relative w-full h-auto">
//         <Image src="/modalPic.jpg" alt="" fill className="w-full h-auto" />
//       </div>
//       <div>
//         <div>
//           <h4 className={`${work_sans.className} text-2xl`}>
//             Flared Denim Pant w Patch Pocket in Mid Blue Wash Denim
//           </h4>
//         </div>
//         <div>
//           <p className={`${work_sans.className} text-xs`}>$199</p>
//         </div>
//       </div>
//     </div>
//   </section>
// </>
