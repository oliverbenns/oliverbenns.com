import React, { PropTypes } from 'react';
import { siteMetadata as config } from '../../../gatsby-config';
import Helmet from 'react-helmet';

const Meta = ({ description, noIndex, title }, { location }) => {
  const mainTitle = `${config.title} - Freelance Web Developer`;
  const metaTitle = title ? `${title} | ${mainTitle}` : mainTitle;
  const metaDescription = description || config.description;
  const absoluteUrl = `${config.url}${location.pathname}`;

  const meta = [
    { name: 'description', content: metaDescription },
    { name: 'og:title', content: metaTitle },
    { name: 'og:description', content: metaDescription },
    { property: 'og:url', content: absoluteUrl },
    { name: 'twitter:title', content: metaTitle },
    { name: 'twitter:description', content: metaDescription },
    { property: 'twitter:url', content: absoluteUrl },
  ];

  if (noIndex) {
    meta.push({ name: 'robots', content: 'noindex' });
  }

  return (
    <Helmet title={metaTitle} meta={meta} />
  );
}

Meta.propTypes = {
  description: PropTypes.string,
  noIndex: PropTypes.bool,
  title: PropTypes.string,
};

Meta.contextTypes = {
  location: PropTypes.object,
};

export default Meta;
