import { mailIcon, mapIcon, phoneIcon } from "../../assets/images";

const Contact = () => {
    return(
        <section className=" w-full  py-16 bg-blue-50">
            <div className="container-xl">
                <h3 className="section-title mb-10">Contact Me</h3>
                <div className="flex gap-10 max-lg:flex-col">
                    <div className="lg:w-1/3  pr-5 ">
                        <h3 className="text-2xl font-bold mb-8">What's your story? Get in touch</h3>
                        <p className="text-lg font-semibold">Always available for freelancing if the right project comes along, Feel free to contact me.</p>
                        <p className="flex gap-5 font-semibold mt-8">
                            <img src={mapIcon} alt="addresss" className="w-6"/>
                            123 Stree New York City , United States Of America 750065.
                        </p>
                        <p className="flex gap-5 font-semibold mt-8">
                            <img src={mailIcon} alt="addresss" className="w-6"/>
                            support@domain.com
                        </p>
                        <p className="flex gap-5 font-semibold mt-8">
                            <img src={phoneIcon} alt="addresss" className="w-4"/>
                            +044 9696 9696 3636
                        </p>
                    </div>
                    <div className="lg:w-2/3 shadow-md p-5 rounded-lg shadow-black bg-white">
                        <h3 className="text-2xl font-semibold mb-8">Say Something</h3>
                        <form action="#">
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