import React, { Component } from 'react'

import styles from './styles.module.css'

export default class Hamburger extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false,
    }
  }
  onClick() {
    this.setState({
      active: !this.state.active,
    });

  }

  render() {
    return (
      <div className={`${this.state.active ? styles.active : styles.icon} ${this.props.className}`} onClick={this.onClick.bind(this)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    )
  }
}
