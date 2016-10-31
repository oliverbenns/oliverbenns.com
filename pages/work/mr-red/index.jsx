import React, { Component } from 'react';
import { projects } from 'data/projects.json';

import Wrapper from 'components/wrapper';
import { ProjectIntro, ProjectPage } from 'components/project';

import downloadImageSrc from './img/download-app-store.svg';

export default class MrRed extends Component {
  render() {
    const project = projects.find(_project => _project.slug === 'mr-red');

    const cta = (
      <a href={project.cta.link} target="_blank" rel="noopener noreferrer">
        <img src={downloadImageSrc} alt={project.cta.text} />
      </a>
    );

    return (
      <ProjectPage project={project}>
        <ProjectIntro project={project} cta={cta} />
      </ProjectPage>
    );
  }
}
