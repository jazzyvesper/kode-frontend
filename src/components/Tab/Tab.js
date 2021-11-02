import React from 'react';
import './Tab.css';
import {depart} from '../../utils/constants'
import TabLink from './TabLink';

function Tab(props) {
const [text, setText] = React.useState('');

function handleClick(e) {
  
  props.onSearch({
    keyword: e.target.dataset.value
  })
  setText(e.target.dataset.value)
}
 
  return (
    <div className="tab">
      <ul onClick={handleClick} className="tab__list">
        {depart.map((item) => (
          <TabLink 
          link={item}
          key={item.key}
          activeClass={text}

          />
        ))}
      </ul>
     </div>
  ) 
}

export default Tab;