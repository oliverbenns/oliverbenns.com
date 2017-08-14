import React, { PropTypes } from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

const Icon = ({ className, name }) => {
  const src = require(`./svg/${name}.svg`);

  return (
    <img src={src} className={classNames(styles.icon, className)} alt={`${name} icon`} />
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
};

export default Icon;
