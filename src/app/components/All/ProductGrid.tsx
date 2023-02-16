'use client';
import { productsData } from '@/JSONData/productsData';
import React, { useState } from 'react';
import { SingleProduct } from './SingleProduct';

export const ProductGrid = () => {
  const [productVision, setProductVision] = useState(true);
  const [modelVision, setModelVision] = useState(false);

  return (
    <section>
      <div className="absolute right-20 space-x-5">
        {modelVision ? (
          <button className="border-b border-black" disabled>
            Model View
          </button>
        ) : (
          <button
            onClick={() => {
              setProductVision(false);
              setModelVision(true);
            }}
          >
            Model View
          </button>
        )}

        {productVision ? (
          <button className="border-b border-black" disabled>
            Product View
          </button>
        ) : (
          <button
            onClick={() => {
              setModelVision(false);
              setProductVision(true);
            }}
          >
            Product View
          </button>
        )}
      </div>
      <section className="grid grid-cols-2 gap-2">
        {productVision &&
          productsData.map((product) => {
            return (
              <div key={product.id}>
                <SingleProduct
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  source={product.source[product.source.length - 1]}
                />
              </div>
            );
          })}
        {modelVision &&
          productsData.map((product) => {
            return (
              <div key={product.id}>
                <SingleProduct
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  source={product.source[0]}
                />
              </div>
            );
          })}
      </section>
    </section>
  );
};
