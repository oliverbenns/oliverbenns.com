import React from 'react';
import Helmet from 'react-helmet';
import { siteMetadata as config } from '../../../gatsby-config';

const Meta = ({ description, location, noIndex, title }) => {
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
};

export default Meta;
