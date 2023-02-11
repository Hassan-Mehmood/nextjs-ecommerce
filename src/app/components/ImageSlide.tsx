"use client";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitter, BsPinterest } from "react-icons/bs";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { imageSlideData } from "@/JSONData/imageSlideData";
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { BiLink } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import Image from "next/image";

export const ImageSlide = () => {
  const [banner, setBanner] = useState(false);
  const [currentCarousel, setCurrentCarousel] = useState(0);

  return (
    <div className="relative flex">
      <button
        className="absolute top-0 bottom-0 m-auto w-16
       z-10 hover:bg-white hover:opacity-60 flex justify-center items-center"
        disabled={currentCarousel <= 0}
        onClick={() => setCurrentCarousel((prev) => prev - 6)}
      >
        <BsChevronLeft className="text-xl stroke-1" />
      </button>
      {imageSlideData
        .slice(currentCarousel, currentCarousel + 6)
        .map((imageElement, primeIndex) => {
          return (
            <div key={primeIndex}>
              <Image
                src={imageElement.source}
                alt="model"
                className="hover:brightness-50 cursor-pointer w-64"
                width={0}
                height={0}
                sizes="100vw"
                onClick={() => {
                  setBanner(true);
                  imageElement.visible = true;
                }}
              />
              {banner && imageElement.visible == true && (
                <div className="fixed w-screen h-screen top-0 left-0 z-20 bg-lightMaroon">
                  <div className="absolute flex flex-col bg-white top-56 md:top-40 lg:top-52 left-2/4  -translate-x-2/4 -translate-y-1/4 p-4 border-2 border-black h-cardHeight md:items-center lg:items-stretch  lg:flex-row">
                    <GrClose
                      className="absolute right-0 mr-4 text-2xl cursor-pointer"
                      onClick={() => {
                        setBanner(false);
                        imageElement.visible = false;
                      }}
                    />
                    <Image
                      src={imageElement.source}
                      alt="model1"
                      width={0}
                      height={0}
                      className="w-full md:w-349 md:min-h-300 lg:min-h-0 lg:w-full"
                      sizes="100vw"
                    />
                    <div className="text-center px-3 flex items-center flex-col mt-4 lg:px-20 md:mt-0 lg:w-cardWidth">
                      <h1 className="text-xs md:text-sm lg:text-base mt-1 md:mt-3 lg:mt-16">
                        {imageElement.description}
                      </h1>
                      <div className="flex md:mt-1 lg:mb-6 md:flex-row">
                        <h1>.</h1>
                        <h1>.</h1>
                        <h1>.</h1>
                      </div>
                      <h1 className="text-gray-500 mb-3 text-xs lg:mb-8">
                        {imageElement.info}
                      </h1>
                      <div className="flex justify-between w-44 text-gray-500 text-xs">
                        <FaFacebookF />
                        <BsPinterest />
                        <MdEmail />
                        <BsTwitter />
                        <BiLink />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* {banner && imageElement.visible == true && (
                <div className="fixed flex flex-col bg-white left-2/4 top-56 md:top-40 lg:top-52 -translate-x-2/4 -translate-y-1/4 p-4 border-2 border-black h-cardHeight md:items-center lg:items-stretch  lg:flex-row">
                  <GrClose
                  className="absolute right-0 mr-4 text-2xl cursor-pointer"
                    onClick={() => {
                      setBanner(false);
                      imageElement.visible = false;
                    }}
                  />
                  <Image
                    src={imageElement.source}
                    alt="model1"
                    width={0}
                    height={0}
                    className="w-full md:w-349 md:min-h-300 lg:min-h-0 lg:w-full"
                    sizes="100vw"
                  />
                  <div className="text-center px-3 flex items-center flex-col mt-4 lg:px-20 md:mt-0 lg:w-cardWidth">
                    <h1 className="text-xs mt-1 md:mt-3 lg:mt-16">
                      {imageElement.description}
                    </h1>
                    <div className="flex md:mt-1 lg:mb-6 md:flex-row">
                      <h1>.</h1>
                      <h1>.</h1>
                      <h1>.</h1>
                    </div>
                    <h1 className="text-gray-500 mb-3 text-xs lg:mb-8">
                      {imageElement.info}
                    </h1>
                    <div className="flex justify-between w-44 text-gray-500 text-xs">
                      <FaFacebookF />
                      <BsPinterest />
                      <MdEmail />
                      <BsTwitter />
                      <BiLink />
                    </div>
                  </div>
                </div>
              )} */}
            </div>
          );
        })}
      <button
        className="absolute top-0 bottom-0 right-0 m-auto w-16
       z-10 hover:bg-white hover:opacity-60 flex justify-center items-center"
        disabled={currentCarousel + 6 >= imageSlideData.length - 1}
        onClick={() => setCurrentCarousel((prev) => prev + 6)}
      >
        <BsChevronRight className="text-xl stroke-1" />
      </button>
    </div>
  );
};
