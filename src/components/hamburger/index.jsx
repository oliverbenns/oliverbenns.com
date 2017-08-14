import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

const Hamburger = ({ active, className, onClick }) => (
  <a className={classNames(styles.container, className)} onClick={onClick} tabIndex={-1} role="button">
    <div className={active ? styles.active : styles.icon}>
      <span />
      <span />
      <span />
      <span />
    </div>
  </a>
);

export default Hamburger;
