import { AboutUs } from './AboutUs';
import { ImageSlide } from './ImageSlide';
import MainSection from './MainSection';

export default function Home() {
  return (
    <main>
      <MainSection />
      <AboutUs />
      <ImageSlide/>
    </main>
  );
}
