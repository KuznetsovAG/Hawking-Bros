import React from "react";

const FormCheckbox = ({ selectValue, handleSelectValue }) => {
  return (
    <>
      <div className="form__checkbox">
        <input id="payment" type="checkbox" className="checkbox-wrapper" />
        <label htmlFor="payment">Remember me</label>
      </div>
      <div className="form__toogle">
        <input
          type="checkbox"
          name="toggle"
          id="toggle-button"
          className="toggle-button"
        />
        <label htmlFor="toggle-button" className="toogle__label">
          Off
        </label>
      </div>
      <div className="form__radio">
        <div className="radio-wrapper">
          <label>
            Radio selection 1
            <input type="radio" className="modern-radio" value="1" name="a" />
            <span></span>
          </label>
          <label>
            Radio selection 2
            <input type="radio" className="modern-radio" value="2" name="a" />
            <span></span>
          </label>
          <label>
            Radio selection 3
            <input type="radio" className="modern-radio" value="3" name="a" />
            <span></span>
          </label>
        </div>
      </div>
      <div className="form__select">
        <label className="select__title">Dropdown Title</label>
        <select
          value={selectValue}
          onChange={handleSelectValue}
          className="select__list"
        >
          <option defaultValue value="option">
            Dropdown option
          </option>
          <option value="option1" className="select__option">
            Dropdown option 1
          </option>
          <option value="option2">Dropdown option 2</option>
        </select>
      </div>
    </>
  );
};

export default FormCheckbox;
