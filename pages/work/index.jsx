import React, { Component } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import Fullscreen from 'components/fullscreen'
import Panel from 'components/panel'
import Wrapper from 'components/wrapper'

import styles from './styles.module.css'

export default class Work extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={`Work | ${config.siteTitle}`}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <Wrapper>
          <h1>Work</h1>
        </Wrapper>
        <Panel to={prefixLink('/work/project/')}>
          <h2>Mr. Red</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
        </Panel>
        <Panel to={prefixLink('/work/project/')}>
          <h2>Ahm</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
        </Panel>
        <Panel to={prefixLink('/work/project/')}>
          <h2>Life with Bird</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
        </Panel>
        <Panel to={prefixLink('/work/project/')}>
          <h2>Chadstone</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
        </Panel>
      </div>
    )
  }
}
