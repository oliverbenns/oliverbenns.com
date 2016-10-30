import React, { Component } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import Fullscreen from 'components/fullscreen'
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
        <Fullscreen firstItem>
          <Wrapper>
            <h1>Hello, world.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <img src="http://placehold.it/500x400" />
          </Wrapper>
        </Fullscreen>
      </div>
    )
  }
}
