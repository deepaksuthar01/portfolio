import { FaBars } from "react-icons/fa";

const Header = () => {
    const toggleHandler = () => {
        document.getElementById('mobile-menu').classList.toggle('hidden');
    }
    const handleScroll = event => {
        const scrollTop = window.scrollY;
        if(parseInt(scrollTop) > 80){            
            document.getElementById('navmenu').classList.remove('absolute');
            document.getElementById('navmenu').classList.add('fixed','bg-white','shadow-xl');
        }else{
            document.getElementById('navmenu').classList.remove('fixed','bg-white','shadow-xl')
            document.getElementById('navmenu').classList.add('absolute');
        }
    };
    const handleClick = event => {
        event.stopPropagation()
        var menu = document.getElementById('mobile-menu');
        var hamburger = document.getElementById('hamburger');
        if(!menu.classList.contains('hidden') && !hamburger.contains(event.target) ) {
            menu.classList.add('hidden');
        }
    }
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleClick);
    return (
        <div id="navmenu" className="absolute top-0 w-full z-20 transition ease-in-out delay-150" >
            <nav className="bg-transparent flex justify-between items-center max-lg:p-10 lg:p-4 px-16 max-lg:shadow-xl max-lg:bg-white">
                <div className="site-log">
                    <h2 className="site-text-color lg:text-xl max-lg:text-2xl font-semibold font-serif bg-black rounded-full p-3">D<span className="text-white">p</span></h2>                
                </div>
                <button className="lg:hidden text-4xl hover:site-text-color" id="hamburger" onClick={toggleHandler}>
                    <FaBars />
                </button>
                <ul className="nav-items flex justify-between items-center gap-12 max-lg:hidden ">
                    <li className="nav-item p-2 font-bold text-lg hover:bg-black hover:text-white hover:shadow-xl hover:rounded-lg uppercase"><a href="#home">Home</a></li>
                    <li className="nav-item p-2 font-bold text-lg hover:bg-black hover:text-white hover:shadow-xl hover:rounded-lg uppercase"><a href="#about">About me</a></li>
                    <li className="nav-item p-2 font-bold text-lg hover:bg-black hover:text-white hover:shadow-xl hover:rounded-lg uppercase"><a href="#services">Services</a></li>
                    <li className="nav-item p-2 font-bold text-lg hover:bg-black hover:text-white hover:shadow-xl hover:rounded-lg uppercase"><a href="#portfolio">Portfolio</a></li>
                    <li className="nav-item p-2 font-bold text-lg hover:bg-black hover:text-white hover:shadow-xl hover:rounded-lg uppercase"><a href="#contact">Contact Me</a></li>
                </ul>
                <ul id="mobile-menu" className="nav-items flex justify-center flex-col items-center gap-6 hidden absolute top-0 right-0 bg-white w-1/2 min-h-screen pb-5 shadow-lg -z-10 transition ease-in-out ">
                    <li className="nav-item p-2 font-bold text-lg hover:bg-black hover:text-white hover:shadow-xl hover:rounded-lg uppercase w-full text-center"><a className="w-full" href="#home">Home</a></li>
                    <li className="nav-item p-2 font-bold text-lg hover:bg-black hover:text-white hover:shadow-xl hover:rounded-lg uppercase w-full text-center"><a className="w-full" href="#about">About me</a></li>
                    <li className="nav-item p-2 font-bold text-lg hover:bg-black hover:text-white hover:shadow-xl hover:rounded-lg uppercase w-full text-center"><a className="w-full" href="#services">Services</a></li>
                    <li className="nav-item p-2 font-bold text-lg hover:bg-black hover:text-white hover:shadow-xl hover:rounded-lg uppercase w-full text-center"><a className="w-full" href="#portfolio">Portfolio</a></li>
                    <li className="nav-item p-2 font-bold text-lg hover:bg-black hover:text-white hover:shadow-xl hover:rounded-lg uppercase w-full text-center"><a className="w-full" href="#contact">Contact Me</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;