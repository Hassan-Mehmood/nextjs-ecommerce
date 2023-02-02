import React from "react";

export const AboutUs = () => {
  return (
    <div className="tracking-widest md:flex mx-20 my-20 px-20 py-14 bg-lightOrange">
      <h1 className="text-3xl font-light w-52 min-w-max mr-36">
        MADE FOR THE MODERN <br />
        BOHEMIAN
      </h1>
      <div className="">
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
