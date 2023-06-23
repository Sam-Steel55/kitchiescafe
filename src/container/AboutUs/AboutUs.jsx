import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.transparent} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">At Kitchies Cafe, we are passionate about creating memorable dining experiences. With a focus on culinary excellence, we strive to delight our guests with exceptional flavors, impeccable service, and an inviting atmosphere. Our dedicated team of talented chefs and friendly staff is committed to providing you with a remarkable gastronomic journey that celebrates the art of food.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Since our establishment in 2017, Kitchies Cafe has been a pioneer in the culinary scene. With a rich history spanning over almost a decade, we have earned a reputation for delivering extraordinary dining experiences. We have grown into a renowned destination for food enthusiasts. We are proud of our past, and we look forward to creating many more cherished memories in the years to come.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;