import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

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
    const containerClassName = classNames(
      styles[project.className],
      this.props.className
    );

    return (
      <ContentPage className={containerClassName}>
        <Meta title={project.title} description={project.description} />
        {this.props.children}
      </ContentPage>
    );
  }
}
