import { AboutUs } from './components/AboutUs';
import { Footer } from './components/Footer';
import MainSection from './components/MainSection';
import Product from './components/Products';

export default function Home() {
  return (
    <main>
      <MainSection />
      <Product />
      <AboutUs />
      <Footer />
    </main>
  );
}
