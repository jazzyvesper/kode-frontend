import React from 'react';
import './Tab.css';
import { NavLink } from 'react-router-dom';


function Tab(props) {

  return (
    <div className="tab">
      <ul  className="tab__list">
        <NavLink to="/" className="tab__link section__link" activeClassName="tab__link_active">Все</NavLink>
        <NavLink to="/" className="tab__link section__link" activeClassName="tab__link_active">Designers</NavLink>
        <NavLink to="/" className="tab__link section__link" activeClassName="tab__link_active">Analysts</NavLink>
        <NavLink to="/" className="tab__link section__link" activeClassName="tab__link_active">Managers</NavLink>
        <NavLink to="/" className="tab__link section__link" activeClassName="tab__link_active">iOS</NavLink>
        <NavLink to="/" className="tab__link section__link" activeClassName="tab__link_active">Android</NavLink>
      </ul>
     </div>
  ) 
}

export default Tab;