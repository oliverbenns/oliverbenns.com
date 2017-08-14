import React from 'react';

import Wrapper from '../../wrapper';

import styles from './styles.module.css';

const ProjectDescription = ({ children, media }) => (
  <Wrapper className={styles.content}>
    <div className={styles.media}>
      {media}
    </div>

    <div className={styles.information}>
      {children}
    </div>
  </Wrapper>
);

export default ProjectDescription;
