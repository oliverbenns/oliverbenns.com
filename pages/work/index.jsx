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
          <Panel to={prefixLink(`/work/${project.slug}/`)} key={project.slug} className={styles[project.className]}>
            <div className={styles.panelContent}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
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
