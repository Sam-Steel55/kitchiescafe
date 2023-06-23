import React from 'react';
import images from '../../constants/images';
import { SubHeading } from '../../components';
import { menu } from '../../constants';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    
    <div className='app__wrapper_info'>
    <SubHeading title="Chase the new flavour"/>
    <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Welcome to Kitchies Cafe, where gastronomic excellence awaits. Immerse yourself in an unforgettable culinary journey, where exceptional flavors, artful presentations, and impeccable service come together. Join us for an unforgettable culinary journey. </p>
      <a href={menu} download={menu}>
      <button type="button" className="custom__button">Explore Menu</button>
      </a>
    </div>

    <div className='app__wrapper_img'>
    <img src={images.Header} alt="header_img" />
    </div>

  </div>
);

export default Header;
