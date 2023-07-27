import './Work.css'
import img1 from '@/assets/work-test1.jpg'
import img2 from "@/assets/work-test2.jpeg"
import img3 from "@/assets/work-test3.jpeg"
import defaultAnimation from "@/default.animation";
import {useState} from "react";
import Popup from "@/components/popup";
import {data} from "@/utils/data";

const Work = () => {
    const [popupStates, setPopupStates] = useState([false, false, false]);


    const togglePopup = (index: number) => {
        setPopupStates(prevStates =>
            prevStates.map((state, i) => (i === index ? !state : state = false))
        );
    };

    return (
        <div className='work_wrapper'>
            <h1 data-aos={defaultAnimation.default} data-aos-duration="1500" className='work_title'>Work</h1>
            <div className='work_section'>
                <div data-aos={defaultAnimation.default} data-aos-duration="1000" className='work_section_image_wrapper'>
                    <img onClick={() => togglePopup(0)} className='work_section_image' src={img1} alt='work1' />
                </div>
                <div data-aos={defaultAnimation.default} data-aos-duration="1500" className='work_section_descriptor'>
                    <div>
                        <h3 className='work_descriptor_title'>Impression</h3>
                        <span>BRANDING / DESIGNING / DEVELOPMENT</span>
                    </div>
                    <div data-aos={defaultAnimation.default} data-aos-duration="1500" className='work_section_descriptor_intro'>
                        Illo expedita corrupti placeat cupiditate veniam<br />
                        placeat dolorum libero doloremque. Incidunt cum<br />
                        dolorum dolorem. Sunt et quod molestiae. Quo sed <br />
                        optio quia ducimus aut sed<br />
                    </div>
                </div>
            </div>
            <div className='work_section'>
                <div data-aos={defaultAnimation.default} data-aos-duration="1000" className='work_section_image_wrapper'>
                    <img onClick={() => togglePopup(1)} className='work_section_image' src={img2} alt='work1' />
                </div>
                <div data-aos={defaultAnimation.default} data-aos-duration="1500" className='work_section_descriptor'>
                    <div>
                        <h3 className='work_descriptor_title'>Sense</h3>
                        <span>DESIGN / DEVELOPMENT</span>
                    </div>
                    <div data-aos={defaultAnimation.default} data-aos-duration="1500" className='work_section_descriptor_intro'>
                        Illo expedita corrupti placeat cupiditate veniam<br />
                        placeat dolorum libero doloremque. Incidunt cum<br />
                        dolorum dolorem. Sunt et quod molestiae. Quo sed <br />
                        optio quia ducimus aut sed<br />
                    </div>
                </div>
            </div>
            <div className='work_section'>
                <div data-aos={defaultAnimation.default} data-aos-duration="1000" className='work_section_image_wrapper'>
                    <img onClick={() => togglePopup(2)} className='work_section_image' src={img3} alt='work1' />
                </div>
                <div data-aos={defaultAnimation.default} data-aos-duration="1500" className='work_section_descriptor'>
                    <div>
                        <h3 className='work_descriptor_title'>Fundezy</h3>
                        <span>DESIGN / DEVELOPMENT</span>
                    </div>
                    <div data-aos={defaultAnimation.default} data-aos-duration="1500" className='work_section_descriptor_intro'>
                        Illo expedita corrupti placeat cupiditate veniam<br />
                        placeat dolorum libero doloremque. Incidunt cum<br />
                        dolorum dolorem. Sunt et quod molestiae. Quo sed <br />
                        optio quia ducimus aut sed<br />
                    </div>
                </div>
            </div>
            {
                data.map(({image,category,description,title}, index) => {
                    return <Popup
                        description={description}
                        image={image}
                        category={category}
                        title={title}
                        open={popupStates[index]}
                        onClose={() => togglePopup(index)}>
                        {null}
                    </Popup>
                })
            }
        </div>
    );
};

export default Work;
