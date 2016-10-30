import React, { Component } from 'react';
import { config } from 'config';

import ContentPage from 'components/content-page';
import Helmet from 'react-helmet';
import Wrapper from 'components/wrapper';

import styles from './styles.module.css';

export default class About extends Component {
  render() {
    return (
      <ContentPage>
        <Helmet
          title={`About | ${config.siteTitle}`}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Wrapper>
          <div className={styles.intro}>
            <h1>Hello world.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </Wrapper>
      </ContentPage>
    );
  }
}
