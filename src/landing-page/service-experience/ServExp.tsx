import './ServExp.css';

const ServExp = () => {
    return (
        <div className='serv_exp_wrapper'>
            <div className="service_wrapper">
            <h1 data-aos="fade-up-right" data-aos-duration="1200" className='serv_exp_title'>Services</h1>
            <div className='service'>
                <div className='serv_exp_element'>
                    <div data-aos="fade-up-right" data-aos-duration="1200">Product design</div>
                    <div data-aos="fade-up-right" data-aos-duration="1200" className='line'></div>
                </div>
                <div className='serv_exp_element'>
                    <div data-aos="fade-up-right" data-aos-duration="1200">UI/UX</div>
                    <div data-aos="fade-up-right" data-aos-duration="1200" className='line'></div>
                </div>
                <div className='serv_exp_element'>
                    <div data-aos="fade-up-right" data-aos-duration="1200">User research</div>
                    <div data-aos="fade-up-right" data-aos-duration="1200" className='line'></div>
                </div>
                <div className='serv_exp_element'>
                    <div data-aos="fade-up-right" data-aos-duration="1200" >3D modeling</div>
                    <div data-aos="fade-up-right" data-aos-duration="1200" className='line'></div>
                </div>
            </div>
            </div>
            <div className='experience_wrapper'>
            <h1 data-aos="fade-up-right" data-aos-duration="1200" className='serv_exp_title'>Experience</h1>
            <div className='experience'>
                <div className='serv_exp_element'>
                    <div data-aos="fade-up-right" data-aos-duration="1200">Product design</div>
                    <div className='exp_span_wrapper'>
                    <span data-aos="fade-up-right" data-aos-duration="1200">Uber</span>
                    <span data-aos="fade-up-right" data-aos-duration="1200">2020-21</span>
                        </div>
                    <div data-aos="fade-up-right" data-aos-duration="1200" className='line'></div>
                </div>
                <div className='serv_exp_element'>
                    <div data-aos="fade-up-right" data-aos-duration="1200">Senior Designer</div>
                    <div className='exp_span_wrapper'>
                    <span data-aos="fade-up-right" data-aos-duration="1200">Google</span>
                    <span data-aos="fade-up-right" data-aos-duration="1200">2021-22</span>
                    </div>
                    <div data-aos="fade-up-right" data-aos-duration="1200" className='line'></div>
                </div>
                <div className='serv_exp_element'>
                    <div data-aos="fade-up-right" data-aos-duration="1200">Product Design Manager</div>
                    <div className='exp_span_wrapper'>
                    <span data-aos="fade-up-right" data-aos-duration="1200">Netflix</span>
                    <span data-aos="fade-up-right" data-aos-duration="1200">2021-22</span>
                    </div>
                    <div data-aos="fade-up-right" data-aos-duration="1200" className='line'></div>
                </div>
                <div data-aos="fade-up-right" data-aos-duration="1200" className='serv_exp_element'>
                    <div data-aos="fade-up-right" data-aos-duration="1200">Principal Designer</div>
                    <div className='exp_span_wrapper'>
                        <span data-aos="fade-up-right" data-aos-duration="1200">Apple</span>
                        <span data-aos="fade-up-right" data-aos-duration="1200">2021-22</span>
                    </div>
                    <div className='line'></div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ServExp;