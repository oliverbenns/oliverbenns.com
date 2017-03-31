import React, { PropTypes } from 'react';

import Wrapper from 'components/wrapper';

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

ProjectDescription.propTypes = {
  children: PropTypes.node,
  media: PropTypes.node,
};

export default ProjectDescription;
