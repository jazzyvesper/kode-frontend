import React from 'react';
import './Search.css';
import search from '../../images/search.svg';
import sort from '../../images/sort.svg'
function Search(props) {
  
  return (
    <div className="search">
      <h1 className="search__title">Поиск</h1>
      <form className="search__form" >
        <fieldset className="search__form_type_people">
        <img src={search} alt="Лупа" className="search__button section__link" />
          <input className="search__input" name="search" placeholder="Введи имя, тег, почту..." type="search" id="search" /> 
          <img src={sort} alt="сортировка" className="search__sort section__link" />
         
        </fieldset>
      </form>
     </div>
  ) 
}

export default Search;