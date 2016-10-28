import React, { Component } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import Wrapper from 'components/wrapper'

import styles from './styles.module.css'

export default class About extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={`About | ${config.siteTitle}`}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <Wrapper>
          <h1 className={styles.title}>About</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Wrapper>
      </div>
    )
  }
}
