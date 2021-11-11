import React from 'react';
import './Tab.css';
import {depart} from '../../utils/constants'
import TabLink from './TabLink';

function Tab(props) {

  return (
    <div className="tab">
      <ul className="tab__list">
        {depart.map((item) => (
          <TabLink 
          onSearch={props.onSearch}
          link={item}
          key={item.key}
          />
        ))}
      </ul>
     </div>
  ) 
}

export default Tab;