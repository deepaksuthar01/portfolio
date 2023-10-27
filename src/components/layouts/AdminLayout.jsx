import SideBar from "../admin/SideBar";
import Header from "../sections/Header";
import { useLocation } from 'react-router-dom';


const AdminLayout = (props) => {
    const location =  useLocation();
    const isHome = location.pathname == '/'; 
    return (
        <>
            <Header />
            <SideBar />
            <main className={`py-16 min-h-[70vh]`}>
                {props.children}
            </main>
        </>        
    );
}

export default AdminLayout;
