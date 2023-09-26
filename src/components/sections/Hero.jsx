import { FaBars } from "react-icons/fa";
import { MultitaskingMan, WorkingMan } from "../../assets/images";
const Hero = () => {
    return (
      <div className="site-bg h-screen w-full pt-32 overflow-hidden">
        <div className="flex justify-evenly max-lg:flex-col-reverse items-center relative z-0">
            <div className="left lg:w-2/4 max-lg:p-5 max-lg:mt-16 max-lg:text-start">
                <p className="text-xl font-bold mb-4">Hi i m...</p>
                <h1 className="text-4xl font-bold font-serif ml-4">Deepak Suthar</h1>
                <p className="mt-5 text-lg font-semibold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nisi reprehenderit, non vel qui totam incidunt eveniet dicta eius et.</p>
                <div className="lg:text-center">
                    <button className="mt-10 bg-yellow-500 py-2 px-4 rounded-3xl font-serif font-semibold text-white  hover:text-black hover:shadow-2xl ">Download cv</button>
                </div>
            </div>
            <div className="right">              
                <div className="w-full">
                    <img src={WorkingMan} alt="service man" className="w-full h-auto mt-12" />
                </div>
            </div>
        </div>
      </div>
    )
}

export default Hero;