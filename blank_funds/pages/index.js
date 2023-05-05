import Navbar from "@/components/Landing/Navbar";
import Hero from "@/components/Landing/Hero";

export default function Home() {
  return (
    <div className="container mx-auto px-8 md:px-16 bg-primary">
      
      <Navbar/>
      <Hero/>
    </div>
  );
}
