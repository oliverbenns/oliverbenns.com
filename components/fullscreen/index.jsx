import React, { Component, PropTypes } from 'react';

import styles from './styles.module.css'

export default class Fullscreen extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  };

  render() {
    return (
      <div className={`${styles.fullscreen} ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}
