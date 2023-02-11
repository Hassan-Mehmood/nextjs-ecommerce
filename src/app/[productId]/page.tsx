import { Work_Sans } from '@next/font/google';
import Image from 'next/image';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineClose } from 'react-icons/ai';
import { BsFillCreditCard2BackFill } from 'react-icons/bs';
import { RiTruckFill } from 'react-icons/ri';
import { ProductDisplay } from '../components/productId/ProductDisplay';

const work_sans = Work_Sans({
  subsets: [],
  weight: '500',
});

const productImages = ['/modalPic.jpg', '/modalPic1.jpg'];

function ProductPage({ params }: { params: { productId: string } }) {
  return (
    <section className="max-w-[1440px] mx-auto h-full">
      <div className="flex flex-col lg:flex-row justify-around items-center lg:h-full py-12 md:py-4">
        <section className="flex order-1 sm:order-1 justify-around w-full">
          <div className="w-72 hidden sm:block h-full min-h-[420px] relative">
            <Image src="/modalPic1.jpg" alt="" fill className="object-contain w-full h-auto" />
          </div>

          <div className="w-72 hidden sm:block h-full min-h-[420px] relative">
            <Image src="/modalPic.jpg" alt="" fill className="object-contain w-full h-auto" />
          </div>

          <div className="relative w-full h-auto sm:hidden">
            <button
              className="absolute top-0 bottom-0 m-auto"
              // disabled={productImageNumber <= 0}
              // onClick={() => {
              //   setProductImageNumber((current) => --current);
              // }}
            >
              <AiOutlineArrowLeft size={24} />
            </button>
            <div>
              <Image
                src={productImages[0]}
                alt="productImage"
                width="0"
                height="0"
                sizes="120vw"
                className="w-full h-auto mt-10 md:mt-8 lg:mt-0"
              />
            </div>
            <button
              className="absolute top-0 bottom-0 right-0 m-auto"
              // disabled={productImageNumber >= productImages.length - 1}
              // onClick={() => {
              //   setProductImageNumber((current) => ++current);
              // }}
            >
              <AiOutlineArrowRight size={24} />
            </button>
          </div>
        </section>
        <section className="order-2 sm:order-2 px-4 sm:mt-4">
          <div className="md:h-full">
            <div className="mb-4">
              <h4 className={`text-3xl mb-2`}>
                V Neck Elastic Waist Midi Dress in Periwinkle V Neck Elastic Waist Midi Dress in
                Periwinkle
              </h4>
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
      {/* <ProductDisplay params={params} /> */}
    </section>
  );
}
export default ProductPage;
