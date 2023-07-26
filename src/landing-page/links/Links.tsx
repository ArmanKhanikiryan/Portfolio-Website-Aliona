import './Link.css'
import linkedin from '@/assets/likedin-icon.png'
import facebook from '@/assets/facebook-icon.png'
import youtube from '@/assets/youtube-icon.png'
import instagram from '@/assets/instagram-icon.png'
import twitter from '@/assets/twitter-icon.png'

const Links = () => {

    return (
        <div className='links_wrapper'>
            <div data-aos="fade-up-right" data-aos-duration="1200" className='links_line'></div>
            <div className='links_components'>
                <div className='links_underline'>
                    <div data-aos="fade-up-right" data-aos-duration="1200" className='links_components_info'>Website by</div>
                    <div data-aos="fade-up-right" data-aos-duration="1200" className='links_creator_name'>Arman Khanikiryan</div>
                </div>

                <div className='links_icons_wrapper'>
                    <img data-aos="fade-up-right" data-aos-duration="1200" id='last_lik_item' className='links_icons' src={instagram} alt="instagram"/>
                    <img data-aos="fade-up-right" data-aos-duration="1200" className='links_icons' src={facebook} alt="facebook"/>
                    <img data-aos="fade-up-right" data-aos-duration="1200" className='links_icons' src={linkedin} alt="linkedin"/>
                    <img data-aos="fade-up-right" data-aos-duration="1200" className='links_icons' src={twitter} alt="twitter"/>
                    <img data-aos="fade-up-right" data-aos-duration="1200" className='links_icons' src={youtube} alt="youtube"/>
                </div>
            </div>
        </div>
    );
};

export default Links;