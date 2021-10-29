import React from 'react';
import User from './User.js';
import './Main.css';


function Main(props) {
  const users = props.users;

  console.log(users)
  return (
    <section className="cards">
      {users
      ? 
      users.map((item) => (
        <User 
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