import React, { PropTypes } from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

const Hamburger = ({ active, className, onClick }) => (
  <a className={classNames(styles.container, className)} onClick={onClick} tabIndex={-1}>
    <div className={active ? styles.active : styles.icon}>
      <span />
      <span />
      <span />
      <span />
    </div>
  </a>
);

Hamburger.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Hamburger;
