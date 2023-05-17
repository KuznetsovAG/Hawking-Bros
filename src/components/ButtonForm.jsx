import React from "react";

const ButtonForm = ({ formValid, handleSubmit }) => {
  return (
    <div className="form__buttons">
      <button disabled={!formValid} className="button__cancel">
        Cancel
      </button>
      <button
        disabled={!formValid}
        onClick={handleSubmit}
        className="button__next"
      >
        Next
      </button>
    </div>
  );
};

export default ButtonForm;
