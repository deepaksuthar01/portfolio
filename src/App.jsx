import AboutMe from "./components/sections/AboutMe";
import Contact from "./components/sections/Contact";
import Educations from "./components/sections/Educations";
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
        <Works />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}