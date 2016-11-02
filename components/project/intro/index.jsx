import React, { Component, PropTypes } from 'react';

import Wrapper from 'components/wrapper';

import styles from './styles.module.css';

export default class ProjectIntro extends Component {
  static propTypes = {
    cta: PropTypes.node,
    media: PropTypes.node,
    project: PropTypes.object,
  };

  render() {
    const { cta, media, project } = this.props;

    return (
      <Wrapper className={styles.cover}>
        <div className={styles.intro}>
          <h1>{project.title}</h1>
          <p>{project.clientDescription || project.description}</p>
          {cta || (
            <a href={project.cta.link} target="_blank" rel="noopener noreferrer">{project.cta.text}</a>
          )}
        </div>
        <div className={styles.media}>
          {media}
        </div>
      </Wrapper>
    );
  }
}
