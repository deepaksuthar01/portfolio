import AboutMe from "../components/sections/AboutMe";
import Educations from "../components/sections/Educations";
import Services from "../components/sections/Services";
import Portfolio from "../components/sections/Portfolio";
import Contact from "../components/sections/Contact";
import FontLayout from "../components/layouts/FontLayout";

const Home= () => {
    return (
        <FontLayout>           
            <AboutMe />
            <Educations />
            <Services />
            <Portfolio />
            <Contact /> 
        </FontLayout>
    );
}
export default Home;