import './Header.css'
import img1 from '@/assets/test-img.jpeg'
const Header = () => {
    return (
        <div className='header_wrapper'>
            <div className='header_text_wrapper'>
            <h1 data-aos="fade-up-right" data-aos-duration="1500" className="header_text">
                Hello! I’m Aliona.<br />
                A product designer based <br />
                in Sydney
            </h1>
                <div className='header_bottom_text' data-aos="fade-up-right" data-aos-duration="1500">
                    Et ligula ullamcorper malesuada <br/>
                    proin libero. Mi tempus imperdiet <br/>
                    nulla malesuada pellentesque. <br/>
                </div>
            </div>
            <img src={img1} className='header_image' alt="test" data-aos="fade-up-left" data-aos-duration="1500" />

            <div className='responsive_header_body'>
                <h1 data-aos="fade-up-right" data-aos-duration="1500" className="header_text">
                    Hello! I’m Aliona.<br />
                    A product designer based <br />
                    in Sydney
                </h1>
                <div className='header_bottom_text' data-aos="fade-up-right" data-aos-duration="1500">
                    З Новим роком вас вітаю<br />
                    Миру , щастя всім бажаю.<br />
                    Хай лунає сміх дитячий,<br />
                    Та в житті панує вдача<br />
                </div>
                <div className='responsive_header_body_image_wrapper'>
                    <img src={img1} className='header_image' alt="test" data-aos="zoom-in-down" data-aos-duration="1500" />
                </div>
            </div>
        </div>
    );
};

export default Header;