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
import MetaDescription from "@/components/helmet-discription/MetaDescription";


const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            mirror: true,
        });
    }, []);

    const handleScrollClick = (position: number) => {
        window.scrollTo({
            top: position,
            behavior: "smooth"
        })
    }
    const handleRedirect = (url:string) => {
        window.open(url, '_blank');
    }
    return (
        <div className='App'>
            <div>
                <MetaDescription/>
                <Navbar handleScrollClick={handleScrollClick}/>
                <Header/>
                <ServExp/>
                <Work/>
                <About/>
                <Contact handleRedirect={handleRedirect}/>
                <Footer handleScrollClick={handleScrollClick}/>
                <Links handleRedirect={handleRedirect}/>
            </div>
        </div>
    );
};

export default App;
