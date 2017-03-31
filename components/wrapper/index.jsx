import React, { PropTypes } from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

const Wrapper = ({ children, className }) => (
  <div className={classNames(styles.wrapper, className)}>
    {children}
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Wrapper;
