import React, {FC, useEffect} from 'react';
import 'aos/dist/aos.css';
import './Popup.css';
import {PopupProps} from "@/utils/types";
import defaultAnimation from "@/default.animation";


const Popup:FC<PopupProps> = ({ open, onClose, video, description, category, title,fullVideoUrl }) => {

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
                            <video autoPlay={true} controls={true} src={video} className="popup-image"/>
                        </div>
                        <div className="popup-text-container">
                            <div>
                                <p>{title}</p>
                                <p>{category}</p>
                                <p>{description}</p>
                            </div>
                            <div className='buttons_wrapper'>
                                <button className='popup-close-button' onClick={() => {
                                    if (!fullVideoUrl){
                                        console.log('Empty')
                                    }else {
                                        window.open(fullVideoUrl, '_blank')
                                    }
                                }}>
                                    Click for full video
                                </button>
                                <button className="popup-close-button" onClick={onClose}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Popup;
