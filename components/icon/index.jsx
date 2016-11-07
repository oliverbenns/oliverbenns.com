import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

export default class Icon extends Component {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
  };

  render() {
    const src = require(`./svg/${this.props.name}.svg`);
    const containerClassName = classNames(
      styles.icon,
      this.props.className
    );

    return (
      <img src={src} className={containerClassName} alt={`${this.props.name} icon`} />
    );
  }
}
