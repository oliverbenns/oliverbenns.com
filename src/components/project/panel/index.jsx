import React from 'react';
import Link from 'gatsby-link';
import classNames from 'classnames';

import Wrapper from '../../wrapper';

import themeStyles from '../themes.module.css';
import styles from './styles.module.css';

const ProjectPanel = ({ project }) => (
  <Link
    to={`/work/${project.slug}`}
    className={classNames(themeStyles[project.theme.light ? 'light' : 'dark'], styles[project.className])}
    style={{ background: `${project.theme.background}` }}
  >
    <Wrapper>
      <div className={styles.inner} style={{ backgroundImage: `url(${project.cover})` }}>
        <div className={styles.content}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      </div>
    </Wrapper>
  </Link>
);

export default ProjectPanel;
