import React, { Component } from 'react';
import { projects } from 'data/projects.json';

import Wrapper from 'components/wrapper';
import { ProjectIntro, ProjectPage } from 'components/project';

import coverImage from 'components/project/img/life-with-bird.jpg';
import styles from './styles.module.css';

export default class LifeWithBird extends Component {
  render() {
    const project = projects.find(_project => _project.slug === 'life-with-bird');

    const image = (
      <div className={styles.image}>
        <img src={coverImage} />
      </div>
    );

    return (
      <ProjectPage project={project}>
        <ProjectIntro project={project} image={image} />
        <Wrapper>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
        </Wrapper>
      </ProjectPage>
    );
  }
}
