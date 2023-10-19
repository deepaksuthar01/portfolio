import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/sections/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';
import NoPage from "./Pages/NoPage";
import Portfolio from "./components/sections/Portfolio";
import Layout from "./components/layouts/Layout";
import Home from "./Pages/Home";
export default function App() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
       
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/portfolio" element={<Portfolio />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="*" element={<NoPage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}