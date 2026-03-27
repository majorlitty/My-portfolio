import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { WhoWeBuildFor } from '@/components/WhoWeBuildFor';
import { OurWork } from '@/components/OurWork';
import { OurServices } from '@/components/OurServices';
import { Reviews } from '@/components/Reviews';
import { WhyUs } from '@/components/WhyUs';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <WhoWeBuildFor />
      <OurWork />
      <OurServices />
      <Reviews />
      <WhyUs />
      <FinalCTA />
      <Footer />
    </main>
  );
}
