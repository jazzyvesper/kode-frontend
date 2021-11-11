import React from 'react';
import User from './User.js';
import './Main.css';
import PageErrors from '../PageErrors/PageErrors'

function Main(props) {
  const users = props.users; 
  const usersNextYears = props.sortBirth.length !==0 ? props.sortBirth : '';

  return (
    <section className="cards">
      {users.length !==0
      ? 
      users.map((item) => (
        <User 
        sort={props.sort}
        user={item}
        key={item.id}
        />
      ))
      : users.length ===0 && props.sortBirth.length ===0
      ?
      <PageErrors 
      img={'searchNo'}
      title={'Мы никого не нашли'}
      subtitle={'Попробуй скорректировать запрос'}
      />
      : ''
      }
      <p className={`user__border ${usersNextYears ? ('user__border_visible'): ''}`}>2022</p> 
      {usersNextYears
      ? 
      usersNextYears.map((item) => (
        <User 
        sort={props.sort}
        user={item}
        key={item.id}
        />
      ))
      : ''
      } 
     </section>
  ) 
}

export default Main;
