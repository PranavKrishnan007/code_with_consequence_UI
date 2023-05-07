import Navbar from "../components/Landing/Navbar";
import AboutSection from "../components/Landing/About";
import Hero from "../components/Landing/Hero";
import Achievements from "../components/Landing/Achievements"
import HeroBottom from "../components/Landing/HeroBottom";
import Block from "@/components/Landing/block";
import Footer from "@/components/Landing/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container mx-auto px-8 md:px-16">
        <HeroBottom />
        <AboutSection />
        <Achievements />
        <Block/>
      </div>
      <Footer/>
    </div>
  );
}
