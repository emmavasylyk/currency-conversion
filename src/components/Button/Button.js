import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.scss';

const Button = ({ children, onClick }) => {
  return (
    <button type="sumbit" className={s.button} onClick={onClick}>
      {children}
    </button>
  );
};

Button.protoTypes = {
  children: PropTypes.string,
};

export default Button;
