import React, { Component, PropTypes } from 'react';

import styles from './styles.module.css';

export default class Wrapper extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.node,
  };

  render() {
    return (
      <div className={`${styles.wrapper} ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}
