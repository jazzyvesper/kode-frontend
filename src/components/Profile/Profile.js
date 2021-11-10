import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './Profile.css';
import back from '../../images/back.svg';
import star from '../../images/star.svg';
import cell from '../../images/cell.svg';
import { convertData, counterAge, agetostr } from '../../utils/DataFormat';
import PageErrors from '../PageErrors/PageErrors';

function Profile(props) {
  let { id } = useParams();
  let users = props.user;
  const user = users.find(f => f.id === id);
  const history = useHistory(); 
  const birthday = user ? convertData(user.birthday, 1) : '' ;
  const age = user ? counterAge(user.birthday) : '';
  const ageText = agetostr(age);
  const phoneformat2 = user ? user.phone.split('-').join(' ') : '';
  const phoneformat = `+7 (${phoneformat2.slice(0,3)}) ${phoneformat2.slice(4,12)}`;
  const phonecall = `+7${phoneformat2.split(' ').join('')}`

  
  return (
  <>
    {user
    ?
    <section className="profile">
      <article className="profile__info">
        <img src={back} onClick={() => history.goBack()} alt="назад" className="profile__icon_type_back section__link" />
        <img src={user.avatarUrl} alt="Аватарка" className="profile__avatar" />
        <div className="profile__names">
          <h2 className="profile__title">{`${user.firstName} ${user.lastName}`}</h2>
          <p className="profile__nickname">{user.userTag}</p>
        </div>
        <p className="profile__subtitle">{user.department}</p>
      </article>
      <div className="profile__data">
        <img src={star} alt="Дата рождения" className="profile__icon profile__icon_type_star" />
        <p className="profile__text">{birthday}</p>
        <p className="profile__age">{`${age} ${ageText} `}</p>
      </div>
      <div className="profile__data">
        <img src={cell} alt="телефон" className="profile__icon profile__icon_type_phone" />
        <a href={`tel:${phonecall}`} className="profile__text section__link">{phoneformat}</a>
      </div>
    </section>
    : <PageErrors 
    img={'error'}
    title={'Мы никого не нашли'}
    subtitle={'Попробуй скорректировать запрос'}
    tryAgain={'Вернуться на главную страницу'}
    />
  }
</>
  ) 
}

export default Profile;