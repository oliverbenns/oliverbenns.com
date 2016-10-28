import React, { Component } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import Wrapper from 'components/wrapper'

import { projects } from '../data.json';

export default class Project extends Component {
  render() {
    const project = projects.find(project => project.slug === "life-with-bird");

    return (
      <div>
        <Helmet
          title={`Project | ${config.siteTitle}`}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <Wrapper>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </Wrapper>
      </div>
    )
  }
}
