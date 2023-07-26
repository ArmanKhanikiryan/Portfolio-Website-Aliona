import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "@/components/navbar";
import Header from "@/landing-page/header";
import './App.css'
import ServExp from "@/landing-page/service-experience";
import Work from "@/landing-page/work";
import About from "@/landing-page/about";
import Contact from "@/landing-page/contact";
import Footer from "@/landing-page/footer";
import Links from "@/landing-page/links";

const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            mirror: true,
        });
    }, []);

    return (
        <div className='App'>
            <div>
                <Navbar/>
                <Header/>
                <ServExp/>
                <Work/>
                <About/>
                <Contact/>
                <Footer/>
                <Links/>
            </div>
        </div>
    );
};

export default App;
