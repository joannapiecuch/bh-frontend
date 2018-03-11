import React from 'react';
import './Input.css';

const Input = (props) => {
  const {
    input,
    label,
    type,
    meta: {
      touched,
      error,
      warning
    },
  } = props;


  return (
    <div>
      <label>{label}</label>
      <div>
        <input
          className="form-control"
          {...input}
          placeholder={label}
          type={type}
        />
        {touched && ((error && <span className="error-message">{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  );
};

export default (Input);
