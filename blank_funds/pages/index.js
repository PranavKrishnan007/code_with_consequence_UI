import Navbar from "../components/Landing/Navbar";
import AboutSection from "../components/Landing/About";
import Hero from "../components/Landing/Hero";
import Achievements from "../components/Landing/Achievements"
import HeroBottom from "../components/Landing/HeroBottom";
import Block from "@/components/Landing/block";
import Footer from "@/components/Landing/Footer";
import styles from "@/styles/Index.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className={styles.main}>
        <HeroBottom />
        <AboutSection />
        <Achievements />
        <Block/>
      </div>
        <Footer/>
    </div>
  );
}
