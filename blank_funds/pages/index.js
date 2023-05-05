import Navbar from "../components/Landing/Navbar";
import AboutSection from "../components/Landing/About";
import Hero from "../components/Landing/Hero";
import Achievements from "../components/Landing/Achievements"
import HeroBottom from "../components/Landing/HeroBottom";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto px-8 md:px-16">
        <Navbar />
      </div>
      <Hero />
      <div className="container mx-auto px-8 md:px-16">
        <HeroBottom />
        <AboutSection />
        <Achievements />
      </div>
    </div>
  );
}
