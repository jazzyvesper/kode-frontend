import React from 'react';
import './PageErrors.css';
import { Link } from 'react-router-dom';
import error from '../../images/error.jpg';
import searchNo from '../../images/search-no.png';

function PageErrors(props) {
  const img = props.img === 'error' ? error : searchNo

  return (
    <div className="error__page">
      <img src={img} alt="иконка" className="error__img" />
      <h2 className="error__title">{props.title}</h2>
      <p className="error__text">{props.subtitle}</p>
      {props.img === 'error' ?
       <Link to="/" className="error__link section__link">{props.tryAgain}</Link>
      : ''}
    </div>
  ) 
}

export default PageErrors;