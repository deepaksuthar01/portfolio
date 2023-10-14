import { aboutme} from "../../assets/images";
const AboutMe = () => {
    return (
        <section id="about" className="py-16 bg-blue-50 bg-dark"  >
            <div className="container-xl">
                <h2 className="section-title mb-5">About Me</h2>
                <div className="flex flex-wrap gap-10 max-lg:flex-col overflow-hidden">
                    <div className="flex-1 bg-yellow-500 rounded-ee-full " data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <div className="p-1">
                            <img src={aboutme} alt="about me" />
                        </div>
                    </div>
                    <div className="flex-1 lg:p-10" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <h3 className="text-xl font-bold font-sans mb-10">I'm a Freelancer Back-end Developer with over 4 years of experience.</h3>
                        <p className="text-lg mt-4 ">I'm a Freelancer Back-end Developer with over 4 years of experience. I'm from India. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.</p>
                        <div className="flex justify-start items-center">
                            <a href="#contact" className="site-btn rounded-md mr-4">Contact Me</a>
                            <a href="#portfolio" className="site-btn rounded-md">Protfolio</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;