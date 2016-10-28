import React, { Component } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Wrapper from 'components/wrapper'

import styles from './styles.module.css'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title || 'I like messages.'}</h1>
        <p>
          Say hello and send an email:<br />
          <a href="mailto:a@a.com?subject=Hello%20Oliver!">a@a.com</a>
        </p>
        <div className={styles.lineBreak} />
        <ul>
          <li>
            <a href="https://github.com/oliverbenns/" target="_blank">Github</a>
          </li>
          <li>
            <a href="https://twitter.com/oliverbenns/" target="_blank">Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com/oliverbenns" target="_blank">Instagram</a>
          </li>
        </ul>
      </div>
    )
  }
}




