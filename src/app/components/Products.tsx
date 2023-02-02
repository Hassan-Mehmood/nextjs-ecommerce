import Image from 'next/image';
import { Work_Sans } from '@next/font/google';

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
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-14 mx-auto max-w-5xl items-center">
      {products.map((product) => (
        // <div key={product.img} className="relative w-full h-auto">
        <div key={product.img} className="px-4 my-4">
          {/* <Image src={product.img} alt="" fill /> */}
          <img src={product.img} alt="" className="object-cover" />
          <p className={`${work_sans.className} text-xs tracking-widest leading-5 mb-4`}>
            {product.text}
          </p>
          <p className={`${work_sans.className} text-xs`}>${product.price}</p>
        </div>
      ))}
    </section>
  );
};

export default Product;
