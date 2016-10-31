import React, { Component } from 'react';
import { projects } from 'data/projects.json';

import Wrapper from 'components/wrapper';
import { ProjectIntro, ProjectPage } from 'components/project';

import coverImage from 'components/project/img/ahm.png';
import styles from './styles.module.css';

export default class Ahm extends Component {
  render() {
    const project = projects.find(_project => _project.slug === 'ahm');

    const image = (
      <div className={styles.image}>
        <img src={coverImage} />
      </div>
    );

    return (
      <ProjectPage project={project}>
        <ProjectIntro project={project} image={image} />
      </ProjectPage>
    );
  }
}
