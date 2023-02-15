import React from 'react';

export default function AboutUs() {
  return (
    <div className="md:flex tracking-widest mx-4 lg:mx-20 my-5 md:my-20 px-5 md:px-10 lg:px-20 py-5 md:py-14 bg-lightOrange md:text-left">
      <h2 className="w-full text-center md:text-left text-3xl font-light mb-4 md:mb-0 md:mr-20">
        MADE FOR THE MODERN BOHEMIAN
      </h2>
      <div className="flex flex-col items-center md:items-start">
        <p className="text-sm tracking-wider leading-6">
          We blend classic, fashion forward pieces including elevated basics with bohemian
          detailing. Since our inception, our aim has been to provide size inclusive fashion basics
          for tht modern bohemian. We seek to be an environmentally and socially responsible
          company; as such we work closely with our suppliers to ensure ethical conditions for
          workers. We are continually working towards providing the best clothing and accessories,
          with the least environmental and social harm possible.
        </p>
        <button className="mt-8 border px-10 py-3.5 border-darkGray text-darkGray tracking-widest">
          ABOUT US
        </button>
      </div>
    </div>
  );
}
