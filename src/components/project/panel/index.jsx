import React from 'react';

import Wrapper from '../../wrapper';
import Link from 'gatsby-link';

import styles from './styles.module.css';

const ProjectPanel = ({ project }) => (
  <Link to={`/work/${project.slug}`} className={styles[project.className]}>
    <Wrapper>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      </div>
    </Wrapper>
  </Link>
);

export default ProjectPanel;
