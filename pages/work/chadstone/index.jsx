import React, { Component } from 'react';
import { projects } from 'data/projects.json';

import Wrapper from 'components/wrapper';
import { ProjectIntro, ProjectPage } from 'components/project';

export default class Chadstone extends Component {
  render() {
    const project = projects.find(_project => _project.slug === 'chadstone');

    return (
      <ProjectPage project={project}>
        <ProjectIntro project={project} />
      </ProjectPage>
    );
  }
}
