import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import NoiseOverlay from "@/components/NoiseOverlay";
import ParallaxParticles from "@/components/ParallaxParticles";

export default function Home() {
  return (
    <>
      <Preloader />
      <NoiseOverlay />
      <ParallaxParticles />
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
