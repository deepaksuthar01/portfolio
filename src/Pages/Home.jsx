import AboutMe from "../components/sections/AboutMe";
import Educations from "../components/sections/Educations";
import Services from "../components/sections/Services";
import Portfolio from "../components/sections/Portfolio";
import Contact from "../components/sections/Contact";

const Home= () => {
    return (
        <>           
            <AboutMe />
            <Educations />
            <Services />
            <Portfolio />
            <Contact /> 
        </>
    );
}

export default Home;