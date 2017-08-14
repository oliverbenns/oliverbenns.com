import React, { Component, PropTypes } from 'react';
import { config } from 'config';

import Helmet from 'react-helmet';

import shareImage from 'assets/img/favicon/share.png';

const BUILD_TIME = new Date().getTime();

const openGraphUrl = process.env.NODE_ENV === 'production' ? `${config.siteUrl}${shareImage}` : shareImage;

export default class Html extends Component {
  static propTypes = {
    body: PropTypes.string,
  };

  render() {
    const helmet = Helmet.rewind();
    const { body, headComponents, postBodyComponents } = this.props;

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

          {headComponents}

          {/* Meta */}
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          <meta property="og:site_name" content={config.siteTitle} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={openGraphUrl} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@oliverbenns" />
          <meta name="twitter:creator" content="@oliverbenns" />
          <meta property="twitter:image" content={openGraphUrl} />

          {/* Favicon */}
          <link rel="icon" type="image/png" href={require('assets/img/favicon/favicon-32x32.png')} sizes="32x32" />
          <link rel="icon" type="image/png" href={require('assets/img/favicon/favicon-16x16.png')} sizes="16x16" />
          <link rel="apple-touch-icon" sizes="180x180" href={require('assets/img/favicon/apple-touch-icon.png')} />
          <meta name="theme-color" content="#000000" />

          {css}
        </head>
        <body>
          <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
          {postBodyComponents}
        </body>
      </html>
    );
  }
}
