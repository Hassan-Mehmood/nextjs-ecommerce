import Image from 'next/image';

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
    </main>
  );
}
