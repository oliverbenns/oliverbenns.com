import React, { Component, PropTypes } from 'react';

import macbookImageSrc from './img/macbook.png';
import styles from './styles.module.css';

export default class Macbook extends Component {
  static propTypes = {
    children: PropTypes.array,
  };

  render() {
    return (
      <div className={styles.macbook}>
        <img src={macbookImageSrc} alt="Macbook Frame" />
        <div className={styles.content}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
