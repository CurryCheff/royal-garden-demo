import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ScrollTrigger } from "./hooks/useGsap";

export default function App() {
  useEffect(() => {
    // Web fonts (and any late-loading images) reflow the page after
    // ScrollTrigger has already cached section positions on mount —
    // refresh once layout has settled so trigger offsets stay accurate.
    document.fonts.ready.then(() => ScrollTrigger.refresh());
    window.addEventListener("load", () => ScrollTrigger.refresh());
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
