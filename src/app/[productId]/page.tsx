'use client';
import { useState } from 'react';
import { Work_Sans } from '@next/font/google';
import Image from 'next/image';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BsFillCreditCard2BackFill } from 'react-icons/bs';
import { RiTruckFill } from 'react-icons/ri';

const work_sans = Work_Sans({
  subsets: [],
  weight: '500',
});

const productImages = ['/modalPic.jpg', '/modalPic1.jpg'];

function ProductPage({ params }: { params: { productId: string } }) {
  const [productImageNumber, setProductImageNumber] = useState(0);

  return (
    <section className="max-w-[1440px] mx-auto mb-4">
      <div className="flex flex-col lg:flex-row justify-around items-center lg:h-full py-12 md:py-4">
        <section className="flex order-1 sm:order-1 my-8 md:mt-16 max-w-[800px] sm:items-center sm:gap-2 w-full">
          <div className="w-full hidden sm:block h-full min-h-[580px] relative">
            <Image src="/modalPic1.jpg" alt="" fill className="object-contain w-full" />
          </div>

          <div className="w-full hidden sm:block h-full min-h-[580px] relative">
            <Image src="/modalPic.jpg" alt="" fill className="object-contain w-full" />
          </div>

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
        </section>
        <section className="order-2 sm:order-2 px-4 w-full lg:max-w-[416px] max-w-[800px]">
          <div className="md:h-full">
            <div className="mb-4">
              <h4 className={`text-3xl mb-2`}>V Neck Elastic Waist Midi Dress in Periwinkle</h4>
              <h5 className="mb-3 tracking-widest opacity-50">Bohemian Traders</h5>
              <p className="tracking-widest">$199</p>
            </div>

            <div className="mb-4">
              <p>Size:</p>
              <div>
                <div className="inline-block bg-gray-400 relative">
                  <label htmlFor="sm" className="">
                    SM
                  </label>
                  <input type="checkbox" id="sm" className="w-9 h-9" />
                </div>
                {/* <label htmlFor="md">MD</label> */}
                {/* <input type="checkbox" id="md" className="w-6 h-6 mx-1 inline-block" /> */}
                {/* <label htmlFor="lg">LG</label> */}
                {/* <input type="checkbox" id="lg" className="w-6 h-6 mx-1 inline-block" /> */}
              </div>
            </div>

            <button className="w-full bg-slate-900 text-white py-3 opacity-90">Add to cart</button>
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
    </section>
  );
}
export default ProductPage;
