import './Link.css'
import linkedin from '@/assets/likedin-icon.png'
import facebook from '@/assets/facebook-icon.png'
import youtube from '@/assets/youtube-icon.png'
import instagram from '@/assets/instagram-icon.png'
import twitter from '@/assets/twitter-icon.png'
import {FC} from "react";
import {IRedirect} from "@/utils/types";
import defaultAnimation from "@/default.animation";

const Links:FC<IRedirect> = ({handleRedirect}) => {

    return (
        <div data-aos={defaultAnimation.default} data-aos-duration="1200" className='links_wrapper'>
            <div data-aos={defaultAnimation.default} data-aos-duration="1200" className='links_line'></div>
            <div className='links_components'>
                <div className='links_underline'>
                    <div className='links_components_info'>Website by</div>
                    <div onClick={() => {handleRedirect('https://www.linkedin.com/in/arman-khanikiryan-085447256')}} className='links_creator_name'>Arman Khanikiryan</div>
                </div>
                <div className='links_icons_wrapper'>
                    <img onClick={() => handleRedirect('https://instagram.com')} id='last_lik_item' className='links_icons' src={instagram} alt="instagram"/>
                    <img onClick={() => handleRedirect('https://facebook.com')} className='links_icons' src={facebook} alt="facebook"/>
                    <img onClick={() => handleRedirect('https://linkedin.com')} className='links_icons' src={linkedin} alt="linkedin"/>
                    <img onClick={() => handleRedirect('https://twitter.com')} className='links_icons' src={twitter} alt="twitter"/>
                    <img onClick={() => handleRedirect('https://youtube.com')} className='links_icons' src={youtube} alt="youtube"/>
                </div>
            </div>
        </div>
    );
};

export default Links;