import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

export default class ContentPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  render() {
    const containerClassName = classNames(
      styles.content,
      this.props.className
    );

    return (
      <section className={containerClassName}>
        {this.props.children}
      </section>
    );
  }
}

