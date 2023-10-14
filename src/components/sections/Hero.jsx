import { FaBars } from "react-icons/fa";
import { MultitaskingMan, WorkingMan } from "../../assets/images";
const Hero = () => {
    return (
      <div id="home" className="site-bg lg:h-screen w-full pt-32 overflow-hidden ">
        <div className="relative">
            <div className="absolute -top-[350px] -right-[192px] w-[50rem] h-[50rem] bg-yellow-500 rounded-full" data-aos="fade-down-left"  data-aos-easing="ease-in-sine" data-aos-duration="2000"></div>
        </div>
        <div className="flex justify-evenly max-lg:flex-col-reverse items-center relative z-0">
            <div className="left lg:w-2/4 max-lg:p-5 max-lg:mt-16 max-lg:text-start" >
                <p className="text-xl font-bold ">Hello, I am</p>
                <h1 className="text-4xl font-bold font-sans  my-4" data-aos="flip-right"  data-aos-duration="2000">Deepak Suthar</h1>
                <h3 className="font-bold text-lg font-sans"  data-aos="fade-left"  data-aos-duration="2000">I Am Passionate Developer</h3>
                <p className="mt-5 text-lg font-semibold " data-aos="fade-left"  data-aos-duration="2000">I develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
                <div className="">
                    <button className="site-btn">Download cv</button>
                </div>
            </div>
            <div className="right">              
                <div className="w-full" data-aos="fade-down-left"  data-aos-easing="ease-in-sine" data-aos-duration="2500">
                    <img src={WorkingMan} alt="service man" className="w-full h-auto mt-12" />
                </div>
            </div>
        </div>
      </div>
      
    )
}

export default Hero;