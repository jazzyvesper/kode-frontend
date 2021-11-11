import React from 'react';
import './Tab.css';

function TabLink(props) {
  const activeClass = props.activeClass === props.link.keyword ? true : false;
   
  return (
      <li onClick={props.onClick} data-value={props.link.keyword} className={`tab__link section__link ${activeClass ? ('active__link') : ''}`}>{props.link.name}</li>
  ) 
}

export default TabLink;