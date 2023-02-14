import React from 'react';
interface propsInterface {
  title: string;
  price: number;
}
export const ProductDetails = (props: propsInterface) => {
  return (
    <div className="px-4 py-10 space-y-3 tracking-widest">
      <h1 className="text-2xl uppercase">{props.title}</h1>
      <h1 className="text-sm text-gray-400">BOHEMIAN TRADERS</h1>
      <h1 className="text-sm">$ {props.price}</h1>
      <button className="text-sm border border-black py-2 px-3">WRITE A REVIEW</button>
      <div className="text-sm space-y-3">
        <h1>SIZE:</h1>
        <div className="flex space-x-6">
          <button className="border border-black w-12 py-3  tracking-widest">XS</button>
          <button className="border border-black w-12  tracking-widest">SM</button>
          <button className="border border-black w-12  tracking-widest">MD</button>
          <button className="border border-black w-12  tracking-widest">LG</button>
          <button className="border border-black w-12  tracking-widest">XL</button>
          <button className="border border-black w-12  tracking-widest">XXL</button>
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <button className=" bg-black text-white py-2">ADD TO CART</button>
        <button className="border border-black py-2">ADD TO WISH LIST</button>
      </div>
    </div>
  );
};
