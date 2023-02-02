import { AboutUs } from './components/AboutUs';
import { Footer } from './components/Footer';
import MainSection from './components/MainSection';

export default function Home() {
  return (
    <main>
      <MainSection />
      <AboutUs />
      <Footer />
    </main>
  );
}
