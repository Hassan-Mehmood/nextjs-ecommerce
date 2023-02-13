import Image from "next/image";
import { Work_Sans } from "@next/font/google";

const work_sans = Work_Sans({
  subsets: [],
  weight: "500",
});

const data = [
  {
    source: "/denim-cta-1.webp",
    text: "SHOP WHATS NEW",
  },
  {
    source: "/denim-cta-2.webp",
    text: "SHOP TOPS",
  },
  {
    source: "/denim-cta-3.webp",
    text: "SHOP BOTTOMS",
  },
  {
    source: "/denim-cta-4.webp",
    text: "SHOP DENIM",
  },
];

const MainSection = () => {
  return (
    <>
      <section className="cursor-pointer pt-16 navBreak:pt-0 mb-4 md:mb-12">
        <Image
          alt=""
          src="/denim-hero-banner.webp"
          width="0"
          height="0"
          sizes="100vw"
          className="hidden md:block w-full h-auto"
        />
        <Image
          alt=""
          src="/denim-hero-banner-phone.webp"
          width="0"
          height="0"
          sizes="100vw"
          className="block md:hidden w-full max-h-[518px] object-cover"
        />
      </section>

      <section className="flex flex-col md:flex-row m-0">
        {data.map((element) => {
          return (
            <div className="w-full relative">
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-black hover:opacity-30 opacity-0 transition-opacity duration-300 cursor-pointer" />
              <Image
                alt="model"
                src={element.source}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full"
              />
              <h3
                className={`absolute bottom-6 left-6 text-white tracking-widest text-xs ${work_sans.className}`}
              >
                {element.text}
              </h3>
            </div>
          );
        })}
      </section>
      {/* <section> */}
      {/* <div className="flex flex-col md:flex-row">
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black hover:opacity-30 opacity-0 transition-opacity duration-300 cursor-pointer" />
            <Image
              alt=""
              src="/denim-cta-1.webp"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto object-cover"
            />
            <h3
              className={`absolute bottom-6 left-6 text-white tracking-widest text-xs ${work_sans.className}`}
            >
              SHOP WHATS NEW
            </h3>
          </div>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black hover:opacity-30 opacity-0 transition-opacity duration-300 cursor-pointer" />
            <Image
              alt=""
              src="/denim-cta-2.webp"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto "
            />
            <h3
              className={`absolute bottom-6 left-6 text-white tracking-widest text-xs ${work_sans.className}`}
            >
              SHOP TOPS
            </h3>
          </div>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black hover:opacity-30 opacity-0 transition-opacity duration-300 cursor-pointer" />
            <Image
              alt=""
              src="/denim-cta-3.webp"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
            />
            <h3
              className={`absolute bottom-6 left-6 text-white tracking-widest text-xs ${work_sans.className}`}
            >
              SHOP BOTTOMS
            </h3>
          </div>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black hover:opacity-30 opacity-0 transition-opacity duration-300 cursor-pointer" />
            <Image
              alt=""
              src="/denim-cta-4.webp"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
            />
            <h3
              className={`absolute bottom-6 left-6 text-white tracking-widest text-xs ${work_sans.className}`}
            >
              SHOP DENIM
            </h3>
          </div>
        </div> */}
      {/* </section> */}
    </>
  );
};

export default MainSection;
