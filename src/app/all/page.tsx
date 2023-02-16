import { ProductGrid } from '../components/All/ProductGrid';
import { SideBar } from '../components/All/SideBar';

export default function All() {
  return (
    <section className="mx-4 flex flex-col lg:flex-row lg:mt-10 tracking-wider space-x-14 px-20 pt-4 pb-8">
      <aside className="mt-20 lg:mt-0">
        <h1 className=" text-2xl font-light text-center pb-6 lg:text-3xl lg:text-left">CLASSICS</h1>
        <SideBar />
      </aside>
      <main>
        <ProductGrid />
      </main>
    </section>
  );
}
