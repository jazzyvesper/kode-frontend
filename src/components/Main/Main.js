import React from 'react';
import './Main.css';

function Main(props) {
  
  return (
    <section className="cards">
      <div className="cards__item">
        <img src={props.img} alt="Аватарка" className="card__img" />
        <div className="card__text">
          <h2 className="card__title">{props.name}</h2>
          <p className="card__subtitle">{props.department}</p>
        </div>
      </div>
     </section>
  ) 
}

export default Main;