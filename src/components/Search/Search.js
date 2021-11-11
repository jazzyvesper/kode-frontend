import React from 'react';
import './Search.css';
import search from '../../images/search.svg';
import '../Tab/Tab.css';
import {depart} from '../../utils/constants'
import TabLink from '../Tab/TabLink.js';

function Search(props) {
  const [text, setText] = React.useState('');
  const [keyword, setKeyword] = React.useState('')
  const handleButtonClick = `search__sort section__link ${props.activeButton ? ('search__sort_active') : ''}`

  //Слушатель на ввод поисковых слов
  function handleChangeInput(e) {
    setKeyword(e.target.value);
    props.onSearch({
      keyword: e.target.value
    })
  }

  //Слушатель клика на департаменты
  function handleClick(e) {
    props.onTab({
      keyword: e.target.dataset.value
    })
    setText(e.target.dataset.value)
  }

  //Слушатель клика по сортировке
  function handlerSubmit(e) {
    e.preventDefault();
    props.onSearch({
      keyword
    })
  }

  return (
    <div className="search">
      <h1 className="search__title">Поиск</h1>
      <form className="search__form" onSubmit={handlerSubmit}>
        <fieldset className="search__form_type_people">
        <img src={search} alt="Лупа" className="search__button section__link" />
          <input className="search__input" value={keyword || ''} onChange={handleChangeInput} name="search" placeholder="Введи имя, тег, почту..." type="search" id="search" /> 
          <button onClick={props.handleSortClick} type="button" aria-label="сортировка" className={handleButtonClick}></button>
        </fieldset>
      </form>
      <ul className="tab__list">
        {depart.map((item) => (
          <TabLink 
          onTab={props.onTab}
          link={item}
          onClick={handleClick}
          key={item.key}
          activeClass={text}
          />
        ))}
      </ul>
    </div>
  ) 
}

export default Search;