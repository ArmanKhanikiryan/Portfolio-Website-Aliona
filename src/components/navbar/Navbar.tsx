import './Navbar.css'
import {FC} from "react";
import {IComponent} from "@/App";


const Navbar:FC<IComponent> = ({handleScrollClick}) => {
    return (
        <div className='navbar_wrapper'>
            <div data-aos="fade-up-right" data-aos-duration="1500" className='right_part'>
                <div onClick={() => handleScrollClick(0)} className="buttons">Aliona</div>
            </div>
            <div className='left_part'>
               <div onClick={() => handleScrollClick(2000)} data-aos="fade-up-right" data-aos-duration="1500" className="buttons">Work</div>
               <div onClick={() => handleScrollClick(3750)} data-aos="fade-up-right" data-aos-duration="1500" className="buttons">About</div>
               <div onClick={() => handleScrollClick(5100)} data-aos="fade-up-right" data-aos-duration="1500" className="buttons">Contact</div>
            </div>
        </div>
    );
};

export default Navbar;