'use client';
import Image from 'next/image';
import { Work_Sans } from '@next/font/google';
import { RiTruckFill } from 'react-icons/ri';
import { AiOutlineClose, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BsFillCreditCard2BackFill } from 'react-icons/bs';
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

const productImages = ['/modalPic.jpg', '/modalPic1.jpg'];

const Product = () => {
  const [showProductDescription, setShowProductDescription] = useState(false);
  const [currentCarousel, setCurrentCarousel] = useState(0);

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
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-80 z-40" />
          <div className="bg-white block fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[90%] h-full max-h-[571px] max-w-[1280px] border overflow-scroll z-40">
            <div className="flex flex-col md:flex-row justify-around items-center py-12">
              <section className="w-full flex order-1 justify-around ">
                <div className="w-72 hidden h-full min-h-[420px] relative">
                  <Image
                    src="/modalPic1.jpg"
                    alt=""
                    fill
                    className="object-contain w-full h-auto"
                  />
                </div>
                <div className="w-72 hidden h-full min-h-[420px] relative">
                  <Image src="/modalPic.jpg" alt="" fill className="object-contain w-full h-auto" />
                </div>

                <div className="relative flex">
                  {currentCarousel <= 0 ? (
                    <button className="absolute top-0 bottom-0 m-auto" disabled>
                      <AiOutlineArrowLeft />
                    </button>
                  ) : (
                    <button
                      className="absolute top-0 bottom-0 m-auto"
                      onClick={() => {
                        setCurrentCarousel((current) => --current);
                      }}
                    >
                      <AiOutlineArrowLeft />
                    </button>
                  )}

                  <Image
                    src={productImages[currentCarousel]}
                    alt="productImage"
                    width="0"
                    height="0"
                    sizes="120vw"
                    className="w-full h-auto mt-20 lg:mt-0"
                  />

                  {currentCarousel >= productImages.length - 1 ? (
                    <button disabled className="absolute top-0 bottom-0  right-0 m-auto">
                      <AiOutlineArrowRight />
                    </button>
                  ) : (
                    <button
                      className="absolute top-0 bottom-0 right-0 m-auto"
                      onClick={() => {
                        setCurrentCarousel((current) => ++current);
                      }}
                    >
                      <AiOutlineArrowRight />
                    </button>
                  )}
                </div>
              </section>
              <section className="px-4 ">
                {/* md:w-1/2  md:max-w-[416px] md:h-full mx-auto  */}
                <div
                  className="absolute right-4 top-4 cursor-pointer"
                  onClick={() => setShowProductDescription(false)}
                >
                  <AiOutlineClose size={24} />
                </div>
                <div className="md:h-full">
                  {/* flex flex-col justify-evenly */}
                  <div className="mb-4">
                    <h4 className={`text-3xl mb-2`}>High Waisted Wide Leg Pant</h4>
                    <h5 className="mb-3 tracking-widest opacity-50">Bohemian Traders</h5>
                    <p className="tracking-widest">$199</p>
                  </div>
                  <div>
                    <button className="w-full bg-slate-900 text-white py-3 opacity-90">
                      Add to cart
                    </button>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="flex items-center">
                      <BsFillCreditCard2BackFill size={32} />
                      <p className={`text-[10px] ml-3 ${work_sans.className}`}>
                        SHOP NOW, PAY LATER WITH AFTERPAY & ZIP
                      </p>
                    </div>
                    <div className="flex items-center ml-4">
                      <RiTruckFill size={32} />
                      <p className={`text-[10px] ml-3 ${work_sans.className}`}>
                        FREE SHIPPING ON AU ORDERS OVER $250
                      </p>
                    </div>
                  </div>
                </div>
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
