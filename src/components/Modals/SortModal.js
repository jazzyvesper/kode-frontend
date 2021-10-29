import React from 'react';
import './SortModal.css';
import closeButton from '../../images/closeButton.svg';


function SortModal(props) {
  
  return (
   <div className={`modal ${props.isOpen ? ('modal__open') : ''}`}>
    <div className="modal__container">  
    <div className="modal__heading">
      <h2 className="modal__title">Сортировка</h2>
      <img src={closeButton} className="modal__close" alt="закрыть" />
    </div>
    
    <form className="modal__form">
      <label for="alph" className="form__label">
      <input className="form__input" type="radio" name="choice" id="alph" value="alph" />
      <span class="visible-radio"></span>
      По алфавиту
      </label>
      <label for="birth" className="form__label">
      <input className="form__input" type="radio" name="choice" id="birth" value="birth" /> 
      <span class="visible-radio"></span>
      По дню рождения</label>
     
    </form>
    </div>
  </div>
  ) 
}

export default SortModal;