import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface propsInterface {
  id: string;
  source: string;
  title: string;
  price: number;
}

export const SingleProduct = (props: propsInterface) => {
  return (
    <Link href={`/${props.id}`}>
      <Image
        src={props.source}
        alt="productImage"
        width={0}
        height={0}
        className="w-full"
        sizes="100vw"
      />
      <h1 className="text-sm">{props.title}</h1>
      <h1 className="text-sm text-gray-400">BOHEMIAN TRADERS</h1>
      <h1 className="text-sm">$ {props.price}</h1>
    </Link>
  );
};
