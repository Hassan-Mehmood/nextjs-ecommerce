import { AboutUs } from './AboutUs';
import { Footer } from './Footer';
import { ImageSlide } from './ImageSlide';
import MainSection from './MainSection';

export default function Home() {
  return (
    <main>
      <MainSection />
      <AboutUs />
      <ImageSlide/>
      <Footer />
    </main>
  );
}
