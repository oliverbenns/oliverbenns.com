import React from 'react';
import Link from 'gatsby-link';

import ContentPage from '../components/content-page';
import Meta from '../components/meta';
import Wrapper from '../components/wrapper';

import gifSrc from './img/rage-quit.gif';

const FourOhFour = ({ location }) => (
  <ContentPage>
    <Meta title="404" description="Page not found." noIndex location={location} />
    <Wrapper>
      <h1>Oops.</h1>
      <p>Page not found at the this time. Did you want to view <Link to="/work">my work</Link>?</p>
      <img src={gifSrc} alt="Rage quit" />
    </Wrapper>
  </ContentPage>
);

export default FourOhFour;
