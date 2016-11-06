import React, { Component, PropTypes } from 'react';
import { config } from 'config';
import Helmet from 'react-helmet';

export default class Meta extends Component {
  static propTypes = {
    description: PropTypes.string,
    noIndex: PropTypes.bool,
    title: PropTypes.string,
  }

  static contextTypes = {
    location: PropTypes.object,
  }

  render() {
    const { description, noIndex, title } = this.props;
    const { location } = this.context;

    const metaTitle = title ? `${title} | ${config.siteTitle}` : config.siteTitle;
    const metaDescription = description || config.description;
    const absoluteUrl = `${config.siteUrl}${location.pathname}`;

    const meta = [
      {
        name: 'description',
        content: metaDescription,
      },
      {
        name: 'og:title',
        content: metaTitle,
      },
      {
        name: 'og:description',
        content: metaDescription,
      },
      {
        property: 'og:url',
        content: absoluteUrl,
      },
      {
        name: 'twitter:title',
        content: metaTitle,
      },
      {
        name: 'twitter:description',
        content: metaDescription,
      },
      {
        property: 'twitter:url',
        content: absoluteUrl,
      },
    ];

    if (noIndex) {
      meta.push({
        name: 'robots',
        content: 'noindex',
      });
    }

    return (
      <Helmet title={metaTitle} meta={meta} />
    );
  }
}
