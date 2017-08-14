import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

const Wrapper = ({ children, className }) => (
  <div className={classNames(styles.wrapper, className)}>
    {children}
  </div>
);

export default Wrapper;
