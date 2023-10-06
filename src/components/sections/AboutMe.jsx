import { FaBars } from "react-icons/fa";
import { MultitaskingMan, WorkingMan, aboutme, man_computer, man_table } from "../../assets/images";
const AboutMe = () => {
    return (
        <section className="py-16 bg-blue-50">
            <div className="container-xl">
                <h2 className="section-title mb-5">About Me</h2>
                <div className="flex flex-wrap gap-10 max-lg:flex-col overflow-hidden  ">
                    <div className="flex-1 bg-yellow-500 rounded-ee-full">
                        <div className="p-1">
                            <img src={aboutme} alt="about me" />
                        </div>
                    </div>
                    <div className="flex-1 lg:p-10">
                        <h3 className="text-xl font-bold font-sans mb-10">I'm a Freelancer Back-end Developer with over 4 years of experience.</h3>
                        <p className="text-lg mt-4 ">I'm a Freelancer Back-end Developer with over 4 years of experience. I'm from India. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.</p>
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