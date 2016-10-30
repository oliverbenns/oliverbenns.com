import React, { Component, PropTypes } from 'react';

import Header from 'components/header';

import styles from './styles.module.css';
import 'assets/css/reset.css';
import 'assets/css/document.css';
import 'assets/css/typography.css';

export default class Template extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div>
        <Header />
        <div className={styles.page}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
