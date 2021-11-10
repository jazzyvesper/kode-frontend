import React from 'react';
import { Link } from 'react-router-dom'; 
import './User.css';
import avaimg from '../../images/Ellipse.png'
import { convertData } from '../../utils/DataFormat'

function User(props) { 
  const birthday = convertData(props.user.birthday, 0);
  const avatar = props.user ? props.user.avatarUrl : avaimg;

  return (
      <div className="cards__item">
        <Link to={`/${props.user.id}`}>
          <img src={avatar} alt="Аватарка" className="card__img section__link" />
        </Link>
        <div className="card__text">
          <div className="card__names">
            <h2 className="card__title">{`${props.user.firstName} ${props.user.lastName}`}</h2>
            <p className="card__nickname">{props.user.userTag}</p>
          </div>
          <p className="card__subtitle">{props.user.department}</p>
        </div>
        {props.sort
        ? 
        <p className="card__birthday" >{birthday}</p>
        : ''
        } 
      </div>
  ) 
}

export default User;