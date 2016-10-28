import React, { Component } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Wrapper from 'components/wrapper'

import styles from './styles.module.css'

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <Wrapper>
          <ul>
              <li className={styles.item}>
                <Link to={prefixLink('/')}>Home</Link>
              </li>
              <li className={styles.item}>
                <Link to={prefixLink('/about/')}>About</Link>
              </li>
          </ul>
        </Wrapper>
      </header>
    )
  }
}
