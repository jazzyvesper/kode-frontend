import React from 'react';
import './Tab.css';

function TabLink(props) {
 console.log(props.activeClass)

const activeClass = props.activeClass === props.link.keyword ? true : false;
 console.log(activeClass)
  return (
      <li data-value={props.link.keyword} className={`tab__link section__link ${activeClass ? ('active__link') : ''}`}>{props.link.name}</li>
  ) 
}

export default TabLink;