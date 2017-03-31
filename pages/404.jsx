import React from 'react';
import { prefixLink } from 'gatsby-helpers';

import ContentPage from 'components/content-page';
import Meta from 'components/meta';
import Wrapper from 'components/wrapper';
import { Link } from 'react-router';

import gifSrc from './img/rage-quit.gif';

const FourOhFour = () => (
  <ContentPage>
    <Meta title="404" description="Page not found." noIndex />
    <Wrapper>
      <h1>Oops.</h1>
      <p>Page not found at the this time. Did you want to view <Link to={prefixLink('/work/')}>my work</Link>?</p>
      <img src={gifSrc} alt="Rage quit" />
    </Wrapper>
  </ContentPage>
);

export default FourOhFour;
