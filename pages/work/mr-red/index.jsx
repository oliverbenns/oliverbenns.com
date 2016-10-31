import React, { Component } from 'react';
import { projects } from 'data/projects.json';

import Wrapper from 'components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from 'components/project';

import avatarImageSrc from 'components/project/img/mr-red.png';
import downloadImageSrc from './img/download-app-store.svg';
import styles from './styles.module.css';

export default class MrRed extends Component {
  render() {
    const project = projects.find(_project => _project.slug === 'mr-red');

    const cta = (
      <a href={project.cta.link} target="_blank" rel="noopener noreferrer">
        <img src={downloadImageSrc} alt={project.cta.text} />
      </a>
    );

    const image = (
      <div className={styles.avatar}>
        <img src={avatarImageSrc} />
      </div>
    );

    return (
      <ProjectPage project={project}>
        <ProjectIntro project={project} cta={cta} image={image} />
        <ProjectDescription>
          <h3>Project</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>

          <h3>Role</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
        </ProjectDescription>
      </ProjectPage>
    );
  }
}
