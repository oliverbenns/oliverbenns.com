import React, { Component, PropTypes } from 'react';

import styles from './styles.module.css';

export default class Wrapper extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.children}
      </div>
    );
  }
}
