import { FaBars } from "react-icons/fa";

const Header = () => {
    const toggleHandler = () => {
        document.getElementById('mobile-menu').classList.toggle('max-lg:hidden');
    }
    return (
        <div className="absolute top-0 w-full z-10">
            <nav className="bg-transparent flex justify-between items-center max-lg:p-10 lg:p-4 px-16 max-lg:shadow-xl max-lg:bg-white">
                <div className="site-log">
                    <h2 className="site-text-color lg:text-xl max-lg:text-2xl font-semibold font-serif bg-black rounded-full p-3">D<span className="text-white">p</span></h2>                
                </div>
                <button className="lg:hidden text-4xl hover:site-text-color" onClick={toggleHandler}>
                    <FaBars />
                </button>
                <ul id="mobile-menu" className="nav-items flex justify-between items-center gap-12 max-lg:hidden">
                    <li className="nav-item p-2 font-bold text-lg hover:bg-black hover:text-white hover:shadow-xl hover:rounded-lg uppercase"><a href="#home">Home</a></li>
                    <li className="nav-item p-2 font-bold text-lg hover:bg-black hover:text-white hover:shadow-xl hover:rounded-lg uppercase"><a href="#about">About me</a></li>
                    <li className="nav-item p-2 font-bold text-lg hover:bg-black hover:text-white hover:shadow-xl hover:rounded-lg uppercase"><a href="#services">Services</a></li>
                    <li className="nav-item p-2 font-bold text-lg hover:bg-black hover:text-white hover:shadow-xl hover:rounded-lg uppercase"><a href="#portfolio">Portfolio</a></li>
                    <li className="nav-item p-2 font-bold text-lg hover:bg-black hover:text-white hover:shadow-xl hover:rounded-lg uppercase"><a href="#contact">Contact Me</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;