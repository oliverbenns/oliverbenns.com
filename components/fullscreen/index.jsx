import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

export default class Fullscreen extends Component {
  static propTypes = {
    firstItem: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const containerClassName = classNames(
      this.props.firstItem ? styles.first : styles.fullscreen,
      this.props.className
    );

    return (
      <div className={containerClassName}>
        {this.props.children}
      </div>
    );
  }
}
