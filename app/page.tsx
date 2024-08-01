"use client"; 

import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import { useEffect } from "react";
import 'aos/dist/aos.css'; 
import AboutSection from "./components/about";

export default function Home() {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init();
    });
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <HeroSection />
        <AboutSection />
      </main>
    </>
  );
}
