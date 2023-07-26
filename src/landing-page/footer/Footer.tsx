import './Footer.css'

const Footer = () => {
    return (
        <div className='footer_wrapper'>
            <div className='footer_email_wrapper'>
                <div data-aos="fade-up-right" data-aos-duration="1200" className='footer_email_title'>Email me at</div>
                <div data-aos="fade-up-right" data-aos-duration="1200" className='footer_email'>alion@gmail.com</div>
                <div data-aos="fade-up-right" data-aos-duration="1200" className='line_animation'></div>
            </div>

            <div className='footer_buttons_wrapper'>
                <div data-aos="fade-up-right" data-aos-duration="1200" className='footer_buttons'>Home</div>
                <div data-aos="fade-up-right" data-aos-duration="1200" className='footer_buttons'>Work</div>
                <div data-aos="fade-up-right" data-aos-duration="1200" className='footer_buttons'>About</div>
                <div data-aos="fade-up-right" data-aos-duration="1200" className='footer_buttons'>Contact</div>
            </div>
        </div>
    );
};

export default Footer;