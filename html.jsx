import React, { Component, PropTypes } from 'react';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

import Helmet from 'react-helmet';

const BUILD_TIME = new Date().getTime();

export default class Html extends Component {
  static propTypes = {
    body: PropTypes.string,
  };

  render() {
    const helmet = Helmet.rewind();

    let css;
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />;
    }

    return (
      <html lang="en">
        <head>
          {/* Document */}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          {/* Meta */}
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          <meta property="og:site_name" content={config.siteTitle} />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@oliverbenns" />
          <meta name="twitter:creator" content="@oliverbenns" />

          {/* Favicon */}
          <link rel="icon" type="image/png" href={require('assets/img/favicon/favicon-32x32.png')} sizes="32x32" />
          <link rel="icon" type="image/png" href={require('assets/img/favicon/favicon-16x16.png')} sizes="16x16" />
          <link rel="apple-touch-icon" sizes="180x180" href={require('assets/img/favicon/apple-touch-icon.png')} />
          <meta name="theme-color" content="#000000" />

          {css}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    );
  }
}
