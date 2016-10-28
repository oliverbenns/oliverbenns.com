import React, { Component } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import Contact from 'components/contact'
import Fullscreen from 'components/fullscreen'
import Panel from 'components/panel'
import Wrapper from 'components/wrapper'

import { projects } from './data.json';

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
        {projects.map(project => (
          <Panel to={prefixLink('/work/project/')}>
            <div className={styles.panelContent}>
              <h2>{project.title}</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
          </Panel>
        ))}
        <Wrapper>
          <Contact title="Your project could be here." />
        </Wrapper>
      </div>
    )
  }
}
