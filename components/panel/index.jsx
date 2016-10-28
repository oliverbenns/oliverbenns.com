import React, { Component } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Wrapper from 'components/wrapper'

import styles from './styles.module.css'

export default class Panel extends Component {
  render() {
    return (
      <section className={styles.panel}>
        <Wrapper>
          {this.props.children}
        </Wrapper>
      </section>
    )
  }
}
