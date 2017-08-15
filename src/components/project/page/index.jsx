import React from 'react';
import classNames from 'classnames';

import ContentPage from '../../content-page';
import Meta from '../../meta';

import themeStyles from '../themes.module.css';
import styles from './styles.module.css';

const ProjectPage = ({ children, className, location, project }) => (
  <ContentPage
    className={classNames(themeStyles[project.theme.light ? 'light' : 'dark'], styles[project.className], className)}
    style={{ backgroundColor: project.theme.background }}
  >
    <Meta title={project.title} description={project.description} location={location} />
    {children}
  </ContentPage>
);

export default ProjectPage;
