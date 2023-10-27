import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";


const SideBar = () => {
    return(
        <aside>
            <nav className="sidebar my-20 w-60 h-full min-h-screen fixed overflow-y-auto bg-black text-white">
               <button className="float-right  px-4">
                    <FaCircleArrowLeft className="text-3xl"/>
                    <FaCircleArrowRight className="text-3xl hidden" />
               </button>
                <ul className="flex flex-col justify-center w-full">
                    <li className="p-4 text-xl border-b"><Link to="/admin/dashboard">Dashboard</Link></li>
                    <li className="p-4 text-xl border-b"><Link to="/admin/settings">Settings</Link></li>
                </ul>
            </nav>
        </aside>
    );
}
export default SideBar;