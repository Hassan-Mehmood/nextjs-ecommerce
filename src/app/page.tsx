import Image from 'next/image';
import { Work_Sans } from '@next/font/google';

const work_sans = Work_Sans({
  subsets: [],
  weight: '500',
});

export default function Home() {
  return (
    <main className="px-2 mx-auto">
      <section className="cursor-pointer">
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

      <section>
        <div className="flex flex-col md:flex-row">
          <div className="relative md:min-h-[1120px]">
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
              className={`absolute bottom-6 left-6 spac text-white tracking-widest text-xs ${work_sans.className}`}
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
              className="w-full h-auto"
            />
            <h3
              className={`absolute bottom-6 left-6 spac text-white tracking-widest text-xs ${work_sans.className}`}
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
              className={`absolute bottom-6 left-6 spac text-white tracking-widest text-xs ${work_sans.className}`}
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
              className={`absolute bottom-6 left-6 spac text-white tracking-widest text-xs ${work_sans.className}`}
            >
              SHOP DENIM
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
}
