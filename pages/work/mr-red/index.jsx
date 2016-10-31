import React, { Component } from 'react';
import { projects } from 'data/projects.json';

import Wrapper from 'components/wrapper';
import { ProjectPage } from 'components/project';

import downloadImageSrc from './img/download-app-store.svg';
import styles from '../project/styles.module.css';

export default class MrRed extends Component {
  render() {
    const project = projects.find(_project => _project.slug === 'mr-red');

    return (
      <ProjectPage project={project}>
        <Wrapper>
          <div className={styles.intro}>
            <h1>{project.title}</h1>
            <p>{project.clientDescription || project.description}</p>

            <a href={project.cta.link} target="_blank" rel="noopener noreferrer">
              <img src={downloadImageSrc} alt={project.cta.text} />
            </a>
          </div>
        </Wrapper>
      </ProjectPage>
    );
  }
}
