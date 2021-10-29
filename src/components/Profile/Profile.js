import React from 'react';
import './Profile.css';
import avatar from '../../images/avatar.jpg';
import back from '../../images/back.svg';
import star from '../../images/star.svg';
import cell from '../../images/cell.svg';


function Profile(props) {
  
  return (
<div className="profile">
    <div className="profile__info">
    <img src={back} alt="назад" className="profile__icon_type_back" />
    <img src={avatar} alt="Аватарка" className="profile__avatar" />
    <h2 className="profile__title">Алиса Иванова</h2>
    <p className="profile__subtitle">Designer</p>
    </div>
      <div className="profile__data">
      <img src={star} alt="Дата рождения" className="profile__icon profile__icon_type_star" />
      <p className="profile__text">5 июня 1996</p>
      <p className="profile__age">24 года</p>
      </div>
      <div className="profile__data">
      <img src={cell} alt="телефон" className="profile__icon profile__icon_type_phone" />
      <p className="profile__text">+7 (999) 900 90 90</p>
      </div>
     
      
      </div>
  ) 
}

export default Profile;