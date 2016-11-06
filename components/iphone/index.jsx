import React, { Component, PropTypes } from 'react';

import whiteFrameSrc from './img/iphone-white.png';
import blackFrameSrc from './img/iphone-black.png';
import styles from './styles.module.css';

export default class Iphone extends Component {
  static propTypes = {
    children: PropTypes.node,
    invert: PropTypes.bool,
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.iphone}>
          <img src={this.props.invert ? blackFrameSrc : whiteFrameSrc} alt="iPhone Frame" />
          <div className={styles.content}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
