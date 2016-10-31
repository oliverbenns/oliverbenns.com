import React, { Component, PropTypes } from 'react';
import { prefixLink } from 'gatsby-helpers';

import Wrapper from 'components/wrapper';
import { Link } from 'react-router';

import styles from './styles.module.css';

export default class ProjectIntro extends Component {
  static propTypes = {
    cta: PropTypes.node,
    image: PropTypes.node,
    project: PropTypes.object,

  };

  render() {
    const { cta, image, project } = this.props;

    return (
      <Wrapper className={styles.cover}>
        <div className={styles.intro}>
          <h1>{project.title}</h1>
          <p>{project.clientDescription || project.description}</p>
          {cta ? cta : (
            <a href={project.cta.link} target="_blank" rel="noopener noreferrer">{project.cta.text}</a>
          )}
        </div>
        <div className={styles.image}>
          {image}
        </div>
      </Wrapper>
    );
  }
}
