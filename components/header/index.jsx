import React, { Component } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Hamburger from 'components/hamburger'
import Wrapper from 'components/wrapper'

import styles from './styles.module.css'

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <Wrapper>
          <div className={styles.inner}>
            <ul>
              <li className={styles.item}>
                <Link to={prefixLink('/')}>Home</Link>
              </li>
              <li className={styles.item}>
                <Link to={prefixLink('/about/')}>About</Link>
              </li>
              <li className={styles.item}>
                <Link to={prefixLink('/work/')}>Work</Link>
              </li>
              <li className={styles.item}>
                <Link to={prefixLink('/contact/')}>Contact</Link>
              </li>
            </ul>
          <div className={styles.github}>
            <a className="github-button" href="https://github.com/oliverbenns/oliverbenns.com" data-icon="octicon-star" data-count-href="/oliverbenns/oliverbenns.com/stargazers" data-count-api="/repos/oliverbenns/oliverbenns.com#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star oliverbenns/oliverbenns.com on GitHub">Star</a>
          </div>
          <Hamburger className={styles.hamburger}/>
          </div>
        </Wrapper>
      </header>
    )
  }
}
