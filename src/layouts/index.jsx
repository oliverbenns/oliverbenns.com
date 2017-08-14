import React, { Component } from 'react';

import Header from '../components/header';

import styles from './styles.module.css';
import '../css/reset.css';
import '../css/document.css';
import '../css/typography.css';

export default class Template extends Component {
  static childContextTypes = {
    location: React.PropTypes.object,
  }

  // Allow location to children if they require it.
  getChildContext() {
    return {
      location: this.props.location,
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className={styles.page}>
          {this.props.children()}
        </div>
      </div>
    );
  }
}
