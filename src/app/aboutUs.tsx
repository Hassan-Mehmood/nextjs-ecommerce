import React from "react";

export const AboutUs = () => {
  return (
    <div className="tracking-widest mx-5 md:flex md:mx-20 my-20 px-20 py-14 bg-lightOrange text-center md:text-left">
      <h1 className="text-3xl font-light mb-8 md:mb-0 md:w-52 md:mr-20">
        MADE FOR THE MODERN <br />
        BOHEMIAN
      </h1>
      <div>
        <p className="text-sm font-semibold tracking-wider">
          We blend classic, fashion forward pieces including elevated basics
          with bohemian detailing. Since our inception, our aim has been to
          provide size inclusive fashion basics for tht modern bohemian. We seek
          to be an environmentally and socially responsible company; as such we
          work closely with our suppliers to ensure ethical conditions for
          workers. We are continually working towards providing the best
          clothing and accessories, with the least environmental and social harm
          possible.
        </p>
        <button className="mt-8 border px-10 py-3.5 border-darkGray text-darkGray tracking-widest">ABOUT US</button>
      </div>
    </div>
  );
};
