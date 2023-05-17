import React, { useEffect, useState } from "react";
import FormCheckbox from "./FormCheckbox";
import ButtonForm from "./ButtonForm";
const FormCard = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [textInput, setTextInput] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [textInputDirty, setTextInputDirty] = useState(false);
  const [userNameDirty, setUserNameDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [userNameError, setUserNameError] = useState(
    "Имя не должно быть пустым"
  );
  const [passwordError, setPasswordError] = useState(
    "Пароль не должен быть пустым"
  );
  const [textInputError, setTextInputError] = useState(
    "Поле не должно быть пустым"
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (passwordError || userNameError || textInputError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [passwordError, userNameError, textInputError]);

  const handleUserName = (e) => {
    setUserName(e.target.value);
    if (!e.target.value) {
      setUserNameError("Имя не должно быть пустым");
    } else {
      setUserNameError("");
    }
  };
  const handleInputName = (e) => {
    setTextInput(e.target.value);
    if (!e.target.value) {
      setTextInputError("Error message informing me of a problem");
    } else {
      setTextInputError("");
    }
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 4 || e.target.value.length > 12) {
      setPasswordError("Your password is between 4 and 12 characters");
      if (!e.target.value) {
        setPasswordError("Пароль не должен быть пустым");
      }
    } else {
      setPasswordError("");
    }
  };

  const handleSelectValue = (e) => {
    setSelectValue(e.target.value);
  };
  const handleSubmit = () => {
    const jsonObj = {
      username: userName,
      passwordValue: password,
      textInputValue: textInput,
      radioSelection: selectValue,
    };
    if (formValid) {
      alert(JSON.stringify(jsonObj));
    }
  };

  const handleBlur = (e) => {
    switch (e.target.name) {
      case "name":
        setUserNameDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "text":
        setTextInputDirty(true);
        break;
      default:
    }
  };
  return (
    <div className="form__app">
      <div className="form__container _container">
        <form action="#" className="form__feedback">
          <div className="form__box">
            <label htmlFor="name" className="form__label">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              name="name"
              value={userName}
              onBlur={(e) => handleBlur(e)}
              onChange={(e) => handleUserName(e)}
              className="form__input"
            />
            {userNameDirty && userNameError && (
              <div className="error__message">{userNameError}</div>
            )}
          </div>
          <div className="form__box">
            <label htmlFor="password" className="form__label">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={(e) => handlePassword(e)}
              onBlur={(e) => handleBlur(e)}
              className="form__input"
            />
            {passwordDirty && passwordError && (
              <div className="error__message">{passwordError}</div>
            )}
          </div>
          <div className="form__box">
            <label htmlFor="text" className="form__label">
              Input Text Label
            </label>
            <input
              type="text"
              placeholder="Enter text"
              name="text"
              className="form__input"
              value={textInput}
              onChange={(e) => handleInputName(e)}
              onBlur={(e) => handleBlur(e)}
            />

            {textInputDirty && textInputError && (
              <div className="text__intut-error">{textInputError}</div>
            )}
          </div>
          <FormCheckbox
            selectValue={selectValue}
            handleSelectValue={handleSelectValue}
          />
          <ButtonForm formValid={formValid} handleSubmit={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default FormCard;
