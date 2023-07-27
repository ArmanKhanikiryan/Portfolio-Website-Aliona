import React, {FC, ReactNode, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Popup.css';

interface PopupProps {
    open: boolean;
    onClose: () => void;
    image: string;
    description: ReactNode;
    title: ReactNode,
    category: ReactNode
}

const Popup:FC<PopupProps> = ({ open, onClose, image, description, category, title }) => {
    useEffect(() => {
        AOS.init();
    }, []);

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
                    <div className="popup-content" data-aos="zoom-in">
                        <div className="popup-image-container">
                            <img src={image} className="popup-image" alt="Popup" />
                        </div>
                        <div className="popup-text-container">
                            {title}
                            {category}
                            {description}
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
