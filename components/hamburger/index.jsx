import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

export default class Hamburger extends Component {
  static propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
  }

  render() {
    const containerClassName = classNames(
      this.props.active ? styles.active : styles.icon,
      this.props.className
    );

    return (
      <a className={containerClassName} onClick={this.props.onClick} tabIndex={-1}>
        <span />
        <span />
        <span />
        <span />
      </a>
    );
  }
}
