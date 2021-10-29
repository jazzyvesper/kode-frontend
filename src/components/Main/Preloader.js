import React from 'react';
import './Preloader.css';
import logo from '../../images/preloader.jpg';


function Preloader(props) {
  
  return (
    <section className="cards">
        <img src={logo} alt="Аватарка" className="preloader" />
        <img src={logo} alt="Аватарка" className="preloader" />
        <img src={logo} alt="Аватарка" className="preloader" />
        
     </section>
  ) 
}

export default Preloader;