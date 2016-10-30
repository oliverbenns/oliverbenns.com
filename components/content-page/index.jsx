import React, { Component, PropTypes } from 'react';

import styles from './styles.module.css';

export default class ContentPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  render() {
    return (
      <section className={`${styles.content} ${this.props.className}`}>
        {this.props.children}
      </section>
    );
  }
}

