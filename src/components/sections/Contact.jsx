import { FaMapLocationDot,FaMobileScreenButton } from "react-icons/fa6";
import { RiMailSendLine } from "react-icons/ri";
const Contact = () => {
    return(
        <section id="contact" className=" w-full  py-16 bg-blue-50 bg-dark">
            <div className="container-xl">
                <h3 className="section-title mb-10">Contact Me</h3>
                <div className="flex gap-10 max-lg:flex-col" >
                    <div className="lg:w-1/3  pr-5 "  data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <h3 className="text-2xl font-bold mb-8">What's your story? Get in touch</h3>
                        <p className="text-lg font-semibold">Always available for freelancing if the right project comes along, Feel free to contact me.</p>
                        <p className="flex gap-5 font-semibold mt-8">
                            <FaMapLocationDot className="text-4xl text-black dark:text-white"/>                            
                            123 Stree New York City , United States Of America 750065.
                        </p>
                        <p className="flex gap-5 font-semibold mt-8">
                            <RiMailSendLine className="text-2xl text-black dark:text-white"/>
                            support@domain.com
                        </p>
                        <p className="flex gap-5 font-semibold mt-8">
                            <FaMobileScreenButton className="text-2xl text-black dark:text-white"/>                            
                            +044 9696 9696 3636
                        </p>
                    </div>
                    <div className="lg:w-2/3 shadow-md p-5 rounded-lg shadow-black bg-white"  data-aos="zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <h3 className="text-2xl font-semibold mb-8">Say Something</h3>
                        <form action="#" className="text-black">
                            <div className="flex gap-5 mb-3">
                                <input type="text" className="p-2 w-1/2 border border-2" placeholder="Name*" />
                                <input type="email" className="p-2 w-1/2 border border-2" placeholder="Email*" />
                            </div>
                            <input type="text" className="p-2 w-full mb-3 border border-2" placeholder="Subject*" />
                            <textarea placeholder="Your Message*" className="p-2 w-full mb-3 border border-2" rows={5}></textarea>
                            <button type="button" className="site-btn rounded-md">Send Message</button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Contact;