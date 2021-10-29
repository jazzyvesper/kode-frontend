import React from 'react';
import './PageErrors.css';
import { Link } from 'react-router-dom';
import logo from '../../images/flying-saucer_1f6f8.jpg';


function PageErrors(props) {
  
  return (
      <div className="error__page">
      <img src={logo} alt="Аватарка" className="error__img" />
      <h2 className="error__title">Какой-то сверхразум все сломал</h2>
      <p className="error__text">Постараемся быстро починить</p>
      <Link to="/" className="error__link section__link">Попробовать снова</Link>
      </div>
  ) 
}

export default PageErrors;