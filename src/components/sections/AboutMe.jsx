import { FaBars } from "react-icons/fa";
import { MultitaskingMan, WorkingMan, aboutme, man_computer, man_table } from "../../assets/images";
const AboutMe = () => {
    return (
      <section className="w-full pt-12 pb-10 overflow-hidden bg-yellow-50 ">
        <div className="flex flex-wrap max-lg:flex-col justify-center lg:w-4/5 lg:mx-auto">
            <div className="flex-1 text-center">
                <img src={aboutme} alt="table" className=""/>
            </div>
            <div className="flex-1">
                <div className="py-20 px-16">
                    <h2 className="text-4xl font-bold font-sans  uppercase mb-16">About Me</h2>
                    <h3 className="text-xl font-bold font-sans mb-10">I'm a Freelancer Front-end Developer with over 3 years of experience.</h3>
                    <p className="text-lg mt-4 ">I'm a Freelancer Front-end Developer with over 3 years of experience. I'm from San Francisco. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.</p>
                    <div className="flex justify-start items-center">
                        <button className="site-btn rounded-md mr-4">Contact Me</button>
                        <button className="site-btn rounded-md">Protfolio</button>
                    </div>
                </div>
            </div>
        </div>
      </section>
    )
}

export default AboutMe;