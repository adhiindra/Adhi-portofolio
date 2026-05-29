import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import NoiseOverlay from "@/components/NoiseOverlay";

export default function Home() {
  return (
    <>
      <Preloader />
      <NoiseOverlay />
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
