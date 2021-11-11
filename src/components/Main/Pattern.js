import React from 'react';
import './Skeleton.css';
import logo from '../../images/Ellipse.png';
import logo1 from '../../images/Rectangle193.png';
import logo2 from '../../images/Rectangle194.png';

function Pattern(props) {

  return (
    <div className="preloader__main">
        <img src={logo} alt="Аватарка" className="preloader_logo" />
        <div className="preloader__list">
        <img src={logo1} alt="Аватарка" className="preloader__item" />
        <img src={logo2} alt="Аватарка" className="preloader__item" />
        </div>
    </div>
  ) 
}

export default Pattern;