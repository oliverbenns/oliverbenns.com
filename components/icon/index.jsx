import React, { Component, PropTypes } from 'react';

import styles from './styles.module.css';

export default class Icon extends Component {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
  };

  render() {
    const src = require(`./svg/${this.props.name}.svg`);

    return (
      <img src={src} className={`${styles.icon} ${this.props.className}`} alt={`${this.props.name} icon`} />
    );
  }
}
