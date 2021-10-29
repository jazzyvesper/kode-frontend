import React from 'react';
import './User.css';

function User(props) {
  
  return (
      <div className="cards__item">
        <img src={props.user.avatarUrl} alt="Аватарка" className="card__img" />
        <div className="card__text">
          <h2 className="card__title">{props.user.firstName}</h2>
          <p className="card__subtitle">{props.user.department}</p>
        </div>
      </div>
  ) 
}

export default User;