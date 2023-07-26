import './Footer.css'
import {FC} from "react";
import {IComponent} from "@/App";

const Footer:FC<IComponent> = ({handleScrollClick}) => {
    return (
        <div className='footer_wrapper'>
            <div className='footer_email_wrapper'>
                <div data-aos="fade-up-right" data-aos-duration="1200" className='footer_email_title'>Email me at</div>
                <div data-aos="fade-up-right" data-aos-duration="1200" className='footer_email'>alion@gmail.com</div>
                <div data-aos="fade-up-right" data-aos-duration="1200" className='line_animation'></div>
            </div>

            <div className='footer_buttons_wrapper'>
                <div onClick={() => handleScrollClick(0)} data-aos="fade-up-right" data-aos-duration="1200" className='footer_buttons'>Home</div>
                <div onClick={() => handleScrollClick(2000)} data-aos="fade-up-right" data-aos-duration="1200" className='footer_buttons'>Work</div>
                <div onClick={() => handleScrollClick(3750)} data-aos="fade-up-right" data-aos-duration="1200" className='footer_buttons'>About</div>
                <div onClick={() => handleScrollClick(5100)} data-aos="fade-up-right" data-aos-duration="1200" className='footer_buttons'>Contact</div>
            </div>
        </div>
    );
};

export default Footer;