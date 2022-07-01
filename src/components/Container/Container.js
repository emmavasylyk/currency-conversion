import React from 'react';
import PropTypes from 'prop-types';
import s from './Container.module.scss';

const Container = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

Container.protoTypes = {
  children: PropTypes.string,
};

export default Container;
