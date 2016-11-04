import React, { Component, PropTypes } from 'react';

import ContentPage from 'components/content-page';
import Meta from 'components/meta';

import styles from './styles.module.css';

export default class ProjectPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.node,
    project: PropTypes.object,
  };

  render() {
    const { project } = this.props;

    return (
      <ContentPage className={`${styles[project.className]} ${this.props.className}`}>
        <Meta title={project.title} description={project.description} />
        {this.props.children}
      </ContentPage>
    );
  }
}
