import { Work_Sans } from '@next/font/google';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineClose } from 'react-icons/ai';
import { BsFillCreditCard2BackFill } from 'react-icons/bs';
import { RiTruckFill } from 'react-icons/ri';

const work_sans = Work_Sans({
  subsets: [],
  weight: '500',
});

interface TproductModal {
  productImageNumber: number;
  setProductImageNumber: Dispatch<SetStateAction<number>>;
  showProductDescription: boolean;
  setShowProductDescription: Dispatch<SetStateAction<boolean>>;
}

const productImages = ['/modalPic.jpg', '/modalPic1.jpg'];

export default function ProductModal({
  productImageNumber,
  setProductImageNumber,
  showProductDescription,
  setShowProductDescription,
}: TproductModal) {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-80 z-40" />
      <div className="bg-white fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[90%] h-full max-h-[571px] max-w-[1280px] border overflow-scroll z-40">
        <div className="flex flex-col lg:flex-row justify-around items-center lg:h-full  py-12 md:py-4">
          <section className="max-w-[665px] flex order-1 sm:order-1 justify-around px-4 mx-auto ">
            <div className="w-72 hidden sm:block h-full min-h-[420px] relative">
              <Image src="/modalPic1.jpg" alt="" fill className="object-contain w-full h-auto" />
            </div>
            <div className="w-72 hidden sm:block h-full min-h-[420px] relative">
              <Image src="/modalPic.jpg" alt="" fill className="object-contain w-full h-auto" />
            </div>

            <div className="flex relative sm:hidden">
              <button
                className="absolute top-0 bottom-0 m-auto"
                disabled={productImageNumber <= 0}
                onClick={() => {
                  setProductImageNumber((current) => --current);
                }}
              >
                <AiOutlineArrowLeft size={24} />
              </button>
              <Image
                src={productImages[productImageNumber]}
                alt="productImage"
                width="0"
                height="0"
                sizes="120vw"
                className="w-full h-auto mt-20 md:mt-8 lg:mt-0"
              />
              <button
                className="absolute top-0 bottom-0 right-0 m-auto"
                disabled={productImageNumber >= productImages.length - 1}
                onClick={() => {
                  setProductImageNumber((current) => ++current);
                }}
              >
                <AiOutlineArrowRight size={24} />
              </button>
            </div>
          </section>
          <section className="sm:order-2 px-4 sm:mt-4">
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
  );
}
