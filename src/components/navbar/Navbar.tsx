import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar_wrapper'>
            <div data-aos="fade-up-right" data-aos-duration="1500" className='right_part'>
                <div className="buttons">Aliona</div>
            </div>
            <div className='left_part'>
               <div data-aos="fade-up-right" data-aos-duration="1500" className="buttons">Work</div>
               <div data-aos="fade-up-right" data-aos-duration="1500" className="buttons">About</div>
               <div data-aos="fade-up-right" data-aos-duration="1500" className="buttons">Contact</div>
            </div>
        </div>
    );
};

export default Navbar;