import React, { Component } from 'react'

import styles from './styles.module.css'

export default class ContentPage extends Component {

  render() {
    return (
      <section className={`${styles.content} ${this.props.className}`}>
        {this.props.children}
      </section>
    )
  }
}

