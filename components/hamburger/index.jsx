import React, { Component } from 'react'

import styles from './styles.module.css'

export default class Hamburger extends Component {
  render() {
    return (
      <div className={`${this.props.active ? styles.active : styles.icon} ${this.props.className}`} onClick={this.props.onClick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    )
  }
}
