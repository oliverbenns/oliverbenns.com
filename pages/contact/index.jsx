import React, { Component } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import Fullscreen from 'components/fullscreen'
import Contact from 'components/contact'
import Wrapper from 'components/wrapper'

export default class _Contact extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={`Contact | ${config.siteTitle}`}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <Fullscreen>
          <Wrapper>
            <Contact />
          </Wrapper>
        </Fullscreen>
      </div>
    )
  }
}
