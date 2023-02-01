"use client";
import { imageSlideData } from "@/JSONData/imageSlideData";
import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsPinterest } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BiLink } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

export const ImageSlide = () => {
  const [banner, setBanner] = useState(false);

  const bannerVisibilty = (index: number) => {
    return banner == false
      ? ((imageSlideData[index].visible = true), setBanner(true))
      : ((imageSlideData[index].visible = false), setBanner(false));
  };

  return (
    <div className="flex">
      {imageSlideData.map((imageElement, index) => {
        return (
          <div key={index}>
            <img
              src={imageElement.source}
              className="hover:brightness-75 cursor-pointer w-64"
              onClick={() => bannerVisibilty(index)}
            />
            {banner && imageElement.visible == true && (
              <div className="fixed flex flex-col bg-white left-2/4 top-48 -translate-x-2/4 -translate-y-1/4 p-4 border-2 border-black h-cardHeight lg:flex-row">
                <GrClose
                  className="absolute right-0 mr-4 text-2xl cursor-pointer"
                  onClick={() => {
                    imageElement.visible = false;
                    setBanner(false);
                  }}
                />
                <img src={imageElement.source} />
                <div className="text-center px-3 flex items-center flex-col mt-4 md:px-20 md:mt-0 lg:w-cardWidth">
                  <h1 className="text-xs md:mb-4 lg:mt-16">
                    {imageElement.description}
                  </h1>
                  <div className="flex md:mb-6 md:flex-row">
                    <h1>.</h1>
                    <h1>.</h1>
                    <h1>.</h1>
                  </div>
                  <h1 className="text-gray-500 mb-3 text-xs md:mb-8">
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
            )}
          </div>
        );
      })}
    </div>
  );
};
