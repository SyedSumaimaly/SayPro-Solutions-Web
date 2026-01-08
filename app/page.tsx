import Image from "next/image";
import Hero from './component/Hero';
import Service from './component/Services';
import Portfolio from './component/Portfolio';
import ContactCTA from './component/ContactCTA';
import AboutSection from './component/AboutSection';
import ContactSection from './component/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <Portfolio />
      <ContactCTA />
      <AboutSection />
      <ContactSection />
    </>
  );
}
