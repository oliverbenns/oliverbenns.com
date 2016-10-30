import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import Contact from 'components/contact';
import { ProjectPanel } from 'components/project';
import Wrapper from 'components/wrapper';

import { projects } from 'data/projects.json';

export default class Work extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={`Work | ${config.siteTitle}`}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />

        {projects.map(project => <ProjectPanel project={project} key={project.slug} />)}

        <Wrapper>
          <Contact title="Your project could be here." />
        </Wrapper>
      </div>
    );
  }
}
