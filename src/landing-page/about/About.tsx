import "./About.css";
import img1 from "@/assets/about-test.jpeg";
import defaultAnimation from "@/default.animation";
const About = () => {
  return (
    <div className="about_wrapper">
      <div className="about_text_wrapper">
        <div className="about_first_description_wrapper">
          <h1 data-aos={defaultAnimation.default} data-aos-duration="1500" className="about_title">About me</h1>
          <div data-aos={defaultAnimation.default} data-aos-duration="1500" className="about_description">
            As a product designer, I have had the opportunity to
            <br />
            work with a wide range of clients on a variety of
            <br />
            projects. My passion for design and development has
            <br />
            driven me to consistently deliver high-quality work that
            <br />
            meets and exceeds my clients' expectations.
          </div>

          <div data-aos={defaultAnimation.default} data-aos-duration="1500" className="about_sec_description">
            I always strive to create beautiful
            <br />
            and functional designs that
            <br />
            perfectly align with my clients'
            <br />
            needs and goals.
          </div>
        </div>

      </div>
      <div className="about_image_wrapper">
        <img data-aos={defaultAnimation.default} data-aos-duration="1000" className="about_image" src={img1} alt="about first" />
      </div>
    </div>
  );
};

export default About;
