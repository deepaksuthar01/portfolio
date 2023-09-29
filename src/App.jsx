import AboutMe from "./components/sections/AboutMe";
import Contact from "./components/sections/Contact";
import Educations from "./components/sections/Educations";
import Experience from "./components/sections/Experience";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Portfolio from "./components/sections/Portfolio";
import Works from "./components/sections/Works";
export default function App() {
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