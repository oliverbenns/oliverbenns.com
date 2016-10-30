import React, { Component } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import Fullscreen from 'components/fullscreen'
import Wrapper from 'components/wrapper'

import styles from './styles.module.css'

export default class Index extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <Fullscreen className={styles.intro} firstItem>
          <Wrapper>
            <h1>
              Hello. I’m Oliver Benns.
              <br />
              <br />
              <br />
              I’m a freelance web developer.
            </h1>
          </Wrapper>
        </Fullscreen>
      </div>
    )
  }
}
