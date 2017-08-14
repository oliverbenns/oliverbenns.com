import React, { PropTypes } from 'react';
import classNames from 'classnames';

import ContentPage from 'components/content-page';
import Meta from 'components/meta';

import styles from './styles.module.css';

const ProjectPage = ({ children, className, project }) => (
  <ContentPage className={classNames(styles[project.className], className)}>
    <Meta title={project.title} description={project.description} />
    {children}
  </ContentPage>
);

ProjectPage.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
  project: PropTypes.object,
};

export default ProjectPage;
