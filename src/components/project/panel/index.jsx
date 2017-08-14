import React, { PropTypes } from 'react';

import Wrapper from 'components/wrapper';
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

ProjectPanel.propTypes = {
  project: PropTypes.object,
};

export default ProjectPanel;
