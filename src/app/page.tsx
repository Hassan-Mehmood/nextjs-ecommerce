import { ImageSlide } from './components/ImageSlide';
import { AboutUs } from './components/AboutUs';
import MainSection from './components/MainSection';
import Product from './components/Products';

export default function Home() {
  return (
    <main>
      <MainSection />
      <Product />
      <AboutUs />
      <ImageSlide />
    </main>
  );
}
