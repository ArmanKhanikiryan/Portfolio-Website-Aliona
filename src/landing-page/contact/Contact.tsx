import './Contact.css'
import whiteArrow from '@/assets/white-arrow.png'
import arrow from '@/assets/black-arrow.png'
const Contact = () => {
    const handleRedirect = (url:string) => {
        window.open(url, '_blank');
    }
    return (
        <div className='contact_container'>
            <h1 data-aos="fade-up-right" data-aos-duration="1500" className='contact_title'>Contact</h1>
        <div className='contact_wrapper'>
            <div className='contact_filed_wrapper'>
            <div onClick={() => handleRedirect('https://gmail.com')}  className='contact_filed'>
                <div className='contact_filed_info'>
                    <div data-aos="fade-up-right" data-aos-duration="1500">Email me</div>
                    <img data-aos="fade-up-right" data-aos-duration="1500" className='arrow_icon' src={arrow} alt="arrow"/>
                    <img data-aos="fade-up-right" data-aos-duration="1500" className='arrow_icon_white' src={whiteArrow} alt="arrow"/>
                </div>
                <div data-aos="fade-up-right" data-aos-duration="1500" className='line'></div>
            </div>
            <div onClick={() => handleRedirect('https://instagram.com')} className='contact_filed'>
                <div className='contact_filed_info'>
                    <div data-aos="fade-up-right" data-aos-duration="1500">Instagram</div>
                    <img data-aos="fade-up-right" data-aos-duration="1500" className='arrow_icon' src={arrow} alt="arrow"/>
                    <img data-aos="fade-up-right" data-aos-duration="1500" className='arrow_icon_white' src={whiteArrow} alt="arrow"/>
                </div>
                <div data-aos="fade-up-right" data-aos-duration="1500" className='line'></div>
            </div>
            <div onClick={() => handleRedirect('https://facebook.com')} className='contact_filed'>
                <div className='contact_filed_info'>
                    <div data-aos="fade-up-right" data-aos-duration="1500">Facebook</div>
                    <img data-aos="fade-up-right" data-aos-duration="1500" className='arrow_icon' src={arrow} alt="arrow"/>
                    <img data-aos="fade-up-right" data-aos-duration="1500" className='arrow_icon_white' src={whiteArrow} alt="arrow"/>
                </div>
                <div data-aos="fade-up-right" data-aos-duration="1500" className='line'></div>
            </div>
            </div>

            <div className='contact_filed_wrapper'>
                <div onClick={() => handleRedirect('https://twitter.com')} className='contact_filed'>
                    <div className='contact_filed_info'>
                        <div data-aos="fade-up-right" data-aos-duration="1500">Twitter</div>
                        <img data-aos="fade-up-right" data-aos-duration="1500" className='arrow_icon' src={arrow} alt="arrow"/>
                        <img data-aos="fade-up-right" data-aos-duration="1500" className='arrow_icon_white' src={whiteArrow} alt="arrow"/>
                    </div>
                    <div data-aos="fade-up-right" data-aos-duration="1500" className='line'></div>
                </div>
                <div onClick={() => handleRedirect('https://linkedin.com')} className='contact_filed'>
                    <div className='contact_filed_info'>
                        <div data-aos="fade-up-right" data-aos-duration="1500">Linkedin</div>
                        <img data-aos="fade-up-right" data-aos-duration="1500" className='arrow_icon' src={arrow} alt="arrow"/>
                        <img data-aos="fade-up-right" data-aos-duration="1500" className='arrow_icon_white' src={whiteArrow} alt="arrow"/>
                    </div>
                    <div data-aos="fade-up-right" data-aos-duration="1500" className='line'></div>
                </div>
                <div onClick={() => handleRedirect('https://youtube.com')} className='contact_filed'>
                    <div className='contact_filed_info'>
                        <div data-aos="fade-up-right" data-aos-duration="1500">Youtube</div>
                        <img data-aos="fade-up-right" data-aos-duration="1500" className='arrow_icon' src={arrow} alt="arrow"/>
                        <img data-aos="fade-up-right" data-aos-duration="1500" className='arrow_icon_white' src={whiteArrow} alt="arrow"/>
                    </div>
                    <div data-aos="fade-up-right" data-aos-duration="1500" className='line'></div>
                </div>
            </div>

        </div>
        </div>
    );
};

export default Contact;