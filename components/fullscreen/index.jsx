import React, { Component, PropTypes } from 'react';

import styles from './styles.module.css';

export default class Fullscreen extends Component {
  static propTypes = {
    firstItem: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    return (
      <div className={`${this.props.firstItem ? styles.first : styles.fullscreen} ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}
