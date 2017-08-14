import React from 'react';
import classNames from 'classnames';

import ContentPage from '../../content-page';
import Meta from '../../meta';

import styles from './styles.module.css';

const ProjectPage = ({ children, className, location, project }) => (
  <ContentPage className={classNames(styles[project.className], className)}>
    <Meta title={project.title} description={project.description} location={location} />
    {children}
  </ContentPage>
);

export default ProjectPage;
