import React, { PropTypes } from 'react';
import { prefixLink } from 'gatsby-helpers';

import Wrapper from 'components/wrapper';
import { Link } from 'react-router';

import styles from './styles.module.css';

const ProjectPanel = ({ project }) => (
  <Link to={prefixLink(`/work/${project.slug}/`)} className={styles[project.className]}>
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
