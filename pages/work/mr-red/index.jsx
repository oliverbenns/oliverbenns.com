import React, { Component } from 'react';
import { projects } from 'data/projects.json';

import OutboundLink from 'components/outbound-link';
import { ProjectDescription, ProjectIntro, ProjectPage } from 'components/project';

import avatarImageSrc from 'components/project/img/mr-red.png';
import downloadImageSrc from './img/download-app-store.svg';
import backgroundStyles from './background.module.css';
import styles from './styles.module.css';

export default class MrRed extends Component {
  render() {
    const project = projects.find(_project => _project.slug === 'mr-red');

    const cta = (
      <OutboundLink to={project.cta.link} className={styles.download}>
        <img src={downloadImageSrc} alt={project.cta.text} />
      </OutboundLink>
    );

    const image = (
      <div className={styles.avatar}>
        <img src={avatarImageSrc} alt="Cover" />
      </div>
    );

    return (
      <ProjectPage project={project} className={backgroundStyles.page}>
        <div className={backgroundStyles.background1} />
        <div className={backgroundStyles.background2} />
        <div className={backgroundStyles.background3} />

        <div className={backgroundStyles.content}>
          <ProjectIntro project={project} cta={cta} media={image} />
          <ProjectDescription>
            <h3>Project</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>

            <h3>Role</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
          </ProjectDescription>
        </div>
      </ProjectPage>
    );
  }
}
