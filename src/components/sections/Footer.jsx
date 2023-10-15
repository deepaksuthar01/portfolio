import { FaInstagram,FaLinkedin,FaTwitterSquare } from "react-icons/fa";
import { footerbg } from "../../assets/images";

const Footer = () => {
    return(
        <section className="bg-black bg-dark py-16" style={{backgroundImage:`url('${footerbg}')` }}>
            <div className="text-center">
                <h2 className="font-bold text-2xl text-white tracking-widest uppercase" >Deepak Suthar</h2>
                <div className="mt-4 p-2 px-10 social flex gap-3 lg:justify-end justify-center">
                    <a href="#"><FaInstagram className='text-white text-4xl hover:text-red-500 hover:motion-safe:animate-spin' /></a>
                    <a href="#"><FaLinkedin className='text-white text-4xl hover:text-blue-400 hover:motion-safe:animate-spin' /></a>
                    <a href="#"><FaTwitterSquare className='text-white text-4xl hover:text-sky-400 hover:motion-safe:animate-spin' /></a>
                </div>
            </div>
        </section>
    );
}

export default Footer;