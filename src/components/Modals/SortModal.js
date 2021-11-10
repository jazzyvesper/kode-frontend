import React from 'react';
import './SortModal.css';
import closeButton from '../../images/closeButton.svg';

function SortModal(props) {
  function handleSortClick(e) {
    props.onSort({
      key: e.target.value
    })
  }

  return (
    <div className={`modal ${props.isOpen ? ('modal__open') : ''}`}>
      <div className="modal__container">  
        <div className="modal__heading">
          <h2 className="modal__title">Сортировка</h2>
          <img src={closeButton} className="modal__close section__link" onClick={props.onClose} alt="закрыть" />
        </div>
        <form className="modal__form">
          <label htmlFor="alph" className="form__label">
            <input className="form__input" type="radio" onClick={handleSortClick} name="choice" id="alph" value={'alph'|| ''} />
            <span className="visible-radio"></span>
            По алфавиту
          </label>
          <label htmlFor="birth" className="form__label">
            <input className="form__input" type="radio" onClick={handleSortClick} name="choice" id="birth" value={'birth' || ''} /> 
            <span className="visible-radio"></span>
            По дню рождения
          </label>
        </form>
      </div>
    </div>
  ) 
}

export default SortModal;