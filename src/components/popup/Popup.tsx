import React, {FC, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Popup.css';
import {PopupProps} from "@/utils/types";
import defaultAnimation from "@/default.animation";


const Popup:FC<PopupProps> = ({ open, onClose, image, description, category, title }) => {

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [open]);

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <>
            {open && (
                <div className="popup-overlay" onClick={handleOverlayClick}>
                    <div className="popup-content" data-aos={defaultAnimation.images} data-aos-duration="500" >
                        <div className="popup-image-container">
                            <img src={image} className="popup-image" alt="Popup" />
                        </div>
                        <div className="popup-text-container">
                            <p>{title}</p>
                            <p>{category}</p>
                            <p>{description}</p>
                            <button className="popup-close-button" onClick={onClose}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Popup;
