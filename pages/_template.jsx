import React, { Component, PropTypes } from 'react'
import Header from 'components/header'

import 'assets/css/reset.css'
import 'assets/css/document.css'
import 'assets/css/typography.css'

import styles from './styles.module.css'

export default class Template extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    return (
      <div>
        <Header />
        <div className={styles.page}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
