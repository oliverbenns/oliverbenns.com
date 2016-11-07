import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

export default class Wrapper extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.node,
  };

  render() {
    const containerClassName = classNames(
      styles.wrapper,
      this.props.className
    );

    return (
      <div className={containerClassName}>
        {this.props.children}
      </div>
    );
  }
}
