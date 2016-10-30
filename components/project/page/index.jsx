import React, { Component, PropTypes } from 'react';
import { config } from 'config';

import ContentPage from 'components/content-page';
import Helmet from 'react-helmet';
import Wrapper from 'components/wrapper';

import styles from './styles.module.css';

export default class ProjectPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    project: PropTypes.object,
  };

  render() {
    const { project } = this.props;

    return (
      <ContentPage className={styles[project.className]}>
        <Helmet
          title={`${project.title} | ${config.siteTitle}`}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Wrapper>
          {this.props.children}
        </Wrapper>
      </ContentPage>
    );
  }
}
