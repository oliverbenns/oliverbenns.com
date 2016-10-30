import React, { Component } from 'react';
import { config } from 'config';

import ContentPage from 'components/content-page';
import Contact from 'components/contact';
import Helmet from 'react-helmet';
import Wrapper from 'components/wrapper';

export default class _Contact extends Component {
  render() {
    return (
      <ContentPage>
        <Helmet
          title={`Contact | ${config.siteTitle}`}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Wrapper>
          <Contact />
        </Wrapper>
      </ContentPage>
    );
  }
}
