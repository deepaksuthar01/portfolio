import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Footer from "../sections/Footer";
import { useLocation } from 'react-router-dom';
const Layout = (props) => {
    const location =  useLocation();
    const isHome = location.pathname == '/'; 
    return (
        <>
            <Header />
            { isHome && <Hero /> } 
            <main className={`${isHome ? '': 'py-16'}`}>
                {props.children}
            </main>
            <Footer />
        </>        
    );
}

export default Layout;
