'use client';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { BsTwitter, BsPinterest } from 'react-icons/bs';
import { imageSlideData } from '@/JSONData/imageSlideData';
import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { BiLink } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import Image from 'next/image';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 6, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 800 },
    items: 6,
    slidesToSlide: 6, // optional, default to 1.
  },
  smallTablet: {
    breakpoint: { max: 788, min: 404 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
};

export const ImageSlide = () => {
  const [showBanner, setBanner] = useState(false);
  const [showBannerID, setShowBannerID] = useState<number>(0);
  const [currentCarousel, setCurrentCarousel] = useState(0);

  function showImageBanner(imageID: number) {
    imageSlideData[imageID - 1].visible = true;
    setBanner(true);
    setShowBannerID(imageID - 1);
  }

  return (
    <section className="relative flex mb-4">
      {/* <button
        className="absolute top-0 bottom-0 m-auto w-9 md:w-12 lg:w-16 opacity-0
       z-10 hover:bg-fadedWhite hover:opacity-100 flex justify-center items-center
       transition-opacity duration-300 cursor-pointer"
        disabled={currentCarousel <= 0}
        onClick={() => setCurrentCarousel((prev) => prev - 6)}
      >
        <BsChevronLeft
          className={`${
            currentCarousel <= 0 ? 'text-gray-500' : 'text-black'
          } text-sm md:text-xl lg:text-3xl stroke-1`}
        />
      </button> */}

      <Carousel responsive={responsive} className="w-full">
        {imageSlideData.map((imageElement) => (
          <div key={imageElement.id} className="relative">
            <Image
              src={imageElement.source}
              alt="model"
              className="w-full"
              width={0}
              height={0}
              sizes="100vw"
            />
            <div
              className="opacity-0 hover:opacity-100 transition-opacity 
                  duration-300 hover:bg-fadedBlack absolute w-full h-full top-0 
                  flex justify-center items-center cursor-pointer"
              onClick={() => {
                showImageBanner(imageElement.id);
                // setBanner(true);
                // imageElement.visible = true;
              }}
            >
              <FaInstagram className="text-base lg:text-3xl text-white" />
            </div>
          </div>
        ))}
      </Carousel>

      {showBanner && imageSlideData[showBannerID].visible == true && (
        <div className="fixed w-screen h-screen top-0 left-0 z-20 bg-fadedMaroon">
          <div
            className="absolute flex flex-col bg-white top-56 md:top-40 lg:top-50 
                  left-2/4  -translate-x-2/4 -translate-y-1/4 p-4 border-2 border-black 
                  h-cardHeightSm md:h-cardHeightMd lg:h-cardHeightLg md:items-center lg:items-stretch  lg:flex-row"
          >
            <GrClose
              className="text-black absolute top-4 right-0 mr-4 text-2xl cursor-pointer"
              onClick={() => {
                setBanner(false);
                imageSlideData[showBannerID].visible = false;
              }}
            />
            <Image
              src={imageSlideData[showBannerID].source}
              alt="model1"
              width={0}
              height={0}
              className="w-full md:w-349 md:min-h-300 lg:min-h-0 lg:w-full"
              sizes="100vw"
            />
            <div className="text-center px-3 flex items-center flex-col mt-4 lg:px-20 md:mt-0 lg:w-cardWidth">
              <h1 className="text-xs md:text-sm lg:text-base mt-1 md:mt-3 lg:mt-16">
                {imageSlideData[showBannerID].description}
              </h1>
              <div className="flex lg:text-3xl md:mt-1 lg:mb-6 md:flex-row">
                <h1>.</h1>
                <h1>.</h1>
                <h1>.</h1>
              </div>
              <h1 className="text-gray-500 mb-3 text-xs lg:text-sm lg:mb-8">
                {imageSlideData[showBannerID].info}
              </h1>
              <div className="text-xs lg:text-xl flex space-x-6 text-gray-500">
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
      {/* <button
        className="absolute top-0 bottom-0 right-0 w-9 md:w-12 lg:w-16 m-auto
       z-10 hover:bg-fadedWhite hover:opacity-100 flex justify-center items-center
       opacity-0 transition-opacity duration-300 cursor-pointer"
        disabled={currentCarousel + 6 >= imageSlideData.length - 1}
        onClick={() => setCurrentCarousel((prev) => prev + 6)}
      >
        <BsChevronRight
          className={`${
            currentCarousel + 6 >= imageSlideData.length ? 'text-gray-500' : 'text-black'
          } text-sm md:text-xl lg:text-3xl stroke-1`}
        />
      </button> */}
    </section>
  );
};
