import './Footer.css'
import {FC} from "react";
import {IComponent} from "@/utils/types";
import defaultAnimation from "@/default.animation";
import AnimatedButton from "@/components/animated-button";

const Footer:FC<IComponent> = ({handleScrollClick}) => {
    return (
        <div className='footer_wrapper'>
            <div className='footer_email_wrapper'>
                <div data-aos={defaultAnimation.default} data-aos-duration="1200" className='footer_email_title'>Email me at</div>
                <div data-aos={defaultAnimation.default} data-aos-duration="1200" className='footer_email'>alion@gmail.com</div>
                <div data-aos={defaultAnimation.default} data-aos-duration="1200" className='line_animation'></div>
            </div>

            <div className='footer_buttons_wrapper'>
                <AnimatedButton handleScrollClick={handleScrollClick} text={'Home'} top={2000}/>
                <AnimatedButton handleScrollClick={handleScrollClick} text={'Work'} top={2000}/>
                <AnimatedButton handleScrollClick={handleScrollClick} text={'About'} top={3750}/>
                <AnimatedButton handleScrollClick={handleScrollClick} text={'Contact'} top={2000}/>
            </div>
        </div>
    );
};

export default Footer;