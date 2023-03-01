import React from 'react';
import { BsInstagram, BsPinterest } from 'react-icons/bs';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className=" py-14 bg-black text-white px-5 md:px-20 mid:py-10 tracking-widest">
      <div className="md:flex justify-between">
        <div className="mb-5">
          <h1 className="md:text-3xl w-52 min-w-max mb-3 font-thin">BOHEMIAN TRADERS</h1>
          <div className="flex ml-1 space-x-2.5 ">
            <BsInstagram />
            <FaFacebookF />
            <BsPinterest />
            <FaTiktok />
          </div>
        </div>
        <div className="text-sm mb-5">
          <h3 className="mb-3">INFO</h3>
          <h3>About Us</h3>
          <h3>Contact Us</h3>
          <h3>Work With Us</h3>
          <h3>Ts & Cs</h3>
          <h3>PRIVACY POLICY</h3>
          <h3>JOURNAL</h3>
        </div>
        <div className="text-sm mb-5">
          <h3 className="mb-3">CUSTOMER CARE</h3>
          <h3>SHIPPING</h3>
          <h3>RETURNS</h3>
          <h3>INCLUSIVE SIZING</h3>
          <h3>PAYMENT METHODS</h3>
          <h3>GIFT CARDS</h3>
          <h3>Outlet</h3>
        </div>
        <div className="text-sm ">
          <h3>SUBSCRIBE TO RECIEVE UPDATES AND SPECIAL OFFERS</h3>
          <div className="mt-4 border-2 px-2 py-2 md:border-b-2 md:border-l-0 md:border-r-0 md:border-t-0 pb-2 flex justify-between">
            <input className="focus:outline-none bg-transparent" placeholder="YOUR EMAIL ADDRESS" />
            <button className="tracking-wider">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <h3 className="mt-10 text-xs">
        CUSTOMERSERVICE@BOHEMIANTRADERS.COM | +61 2 4327 8640 | MON – FRI | 9AM – 5PM AEST
      </h3>
    </footer>
  );
}
