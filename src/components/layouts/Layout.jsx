import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Footer from "../sections/Footer";

const Layout = (props) => {
    return (
        <>
            <Header />
            <Hero />
            <main>
                {props.children}
            </main>
            <Footer />
        </>        
    );
}

export default Layout;
