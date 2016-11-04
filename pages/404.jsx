import React, { Component } from 'react';
import actions from 'assets/js/actions';

import ContentPage from 'components/content-page';
import Meta from 'components/meta';
import Wrapper from 'components/wrapper';

import gifSrc from './img/rage-quit.gif';

export default class FourOhFour extends Component {
  render() {
    return (
      <ContentPage>
        <Meta title="404" description="Page not found." noIndex />
        <Wrapper>
          <h1>Oops.</h1>
          <p>Page not found at the this time. Pick one from <a onClick={actions.toggleMenu} tabIndex={-1}>here</a>.</p>
          <img src={gifSrc} alt="Rage quit" />
        </Wrapper>
      </ContentPage>
    );
  }
}
