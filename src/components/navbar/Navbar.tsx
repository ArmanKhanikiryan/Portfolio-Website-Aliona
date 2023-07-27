import './Navbar.css'
import {FC} from "react";
import {IComponent} from "@/utils/types";
import defaultAnimation from "@/default.animation";
import AnimatedButton from "@/components/animated-button";


const Navbar:FC<IComponent> = ({handleScrollClick}) => {
    return (
        <div className='navbar_wrapper'>
            <div data-aos={defaultAnimation.default} data-aos-duration="1500" className='right_part'>
                <div onClick={() => handleScrollClick(0)} className="buttons">Aliona</div>
            </div>
            <div className='left_part'>
                <AnimatedButton handleScrollClick={handleScrollClick} text={'Work'} top={2000}/>
                <AnimatedButton handleScrollClick={handleScrollClick} text={'About'} top={3750}/>
                <AnimatedButton handleScrollClick={handleScrollClick} text={'Contact'} top={5100}/>
            </div>
        </div>
    );
};

export default Navbar;