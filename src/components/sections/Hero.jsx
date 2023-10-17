import { FaBars } from "react-icons/fa";
import { MultitaskingMan, WorkingMan } from "../../assets/images";
import { useEffect } from "react";
const Hero = () => {
  
const toggleHandler =() =>{
    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
}
    
    useEffect(()=>{
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.getElementById('theme-toggle-light-icon').classList.remove('hidden');
        } else {
            document.getElementById('theme-toggle-dark-icon').classList.remove('hidden');
        }
    },[]);
    return (
      <div id="home" className="site-bg lg:h-screen w-full pt-32 overflow-hidden bg-slate-200 ">
        
        <div className="relative">
            <div className="absolute top-0 right-0 z-10">
                <button id="theme-toggle" type="button" className="text-white dark:text-gray-400 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 m-5  bg-black" onClick={toggleHandler}>
                    <svg id="theme-toggle-dark-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                    <svg id="theme-toggle-light-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <div className="absolute -top-[350px] -right-[192px] w-[50rem] h-[50rem] bg-yellow-500 rounded-full" data-aos="fade-down-left"  data-aos-easing="ease-in-sine" data-aos-duration="2000"></div>
        </div>
        <div className="flex justify-evenly max-lg:flex-col-reverse items-center relative z-0">
            <div className="left lg:w-2/4 max-lg:p-5 max-lg:mt-16 max-lg:text-start" >
                <p className="text-xl font-bold ">Hello, <span className="dark:text-yellow-500 ">I am</span></p>
                <h1 className="text-4xl font-bold font-sans  my-4" data-aos="flip-right"  data-aos-duration="2000"><span className="dark:text-yellow-500 ">Deepak</span> Suthar</h1>
                <h3 className="font-bold text-lg font-sans"  data-aos="fade-left"  data-aos-duration="2000">I Am <span className="dark:text-yellow-500 ">Passionate</span> Developer</h3>
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