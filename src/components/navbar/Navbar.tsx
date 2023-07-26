import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar_wrapper'>
            <div data-aos="fade-up-right" data-aos-duration="1500" className='right_part'>
                <div className="buttons">Aliona</div>
            </div>
            <div data-aos="fade-up-left" data-aos-duration="1500" className='left_part'>
               <div className="buttons">Work</div>
               <div className="buttons">About</div>
               <div className="buttons">Contact</div>
            </div>
        </div>
    );
};

export default Navbar;