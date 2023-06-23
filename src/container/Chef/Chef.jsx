import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Come discover a World of Culinary Delights...</p>
        </div>
        <p className="p__opensans">At Kitchies Cafe, we are dedicated to crafting exceptional culinary experiences. With a focus on creativity and quality ingredients, our team creates dishes that will delight your senses. Join us at Kitchies Cafe and indulge in a culinary journey that will leave a lasting impression. Bon appétit! </p>
      </div>

      <div className="app__chef-sign">
        <p>Edee Francis</p>
        <p className="p__opensans">Chef & Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;