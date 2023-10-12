import { useEffect } from "react";
import AboutMe from "./components/sections/AboutMe";
import Contact from "./components/sections/Contact";
import Educations from "./components/sections/Educations";
import Experience from "./components/sections/Experience";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Portfolio from "./components/sections/Portfolio";
import Works from "./components/sections/Works";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <header>
          <Header />
      </header>
      <Hero />
      <main>
        <AboutMe />
        <Educations />
        <Experience />
        <Works />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}