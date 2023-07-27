import './AnimatedButton.css';
import defaultAnimation from "@/default.animation";
import {FC} from "react";
import {IAnimatedButton} from "@/utils/types";
const AnimatedButton:FC<IAnimatedButton> = ({handleScrollClick, text, top}) => {
    return (
        <div onClick={() => handleScrollClick(top)} className="container">
            <div className="flip-parent">
                <div className="flip-border">
                    <div data-aos={defaultAnimation.default} data-aos-duration="1500" className="flip-text-wrapper">
                        <p className="flip-text">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedButton;