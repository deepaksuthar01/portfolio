import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import NoPage from "./Pages/NoPage";
import Home from "./Pages/Home";
import Login from "./Pages/admin/Login";
import Dashboard from "./Pages/admin/Dashboard";
export default function App() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (       
        <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route  path="/admin/*" element={<Login />} />
                    <Route  path="/admin/dashboard" element={<Dashboard />} />
                    <Route exact path="*" element={<NoPage />} />
                </Routes>
        </BrowserRouter>
    )
}