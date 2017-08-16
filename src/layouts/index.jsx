import React from 'react';

import Header from '../components/header';

import styles from './styles.module.css';
import '../css/reset.css';
import '../css/document.css';
import '../css/typography.css';

const Layout = ({ children, location }) => {
  // Need to pass in location here on build. On development the props come from the individual /pages.
  // This might be bad: https://github.com/gatsbyjs/gatsby/issues/1781#issuecomment-322475987
  // Hopefully this gets resolved later (or the Webpack 3 / Gatsby 2.0 release will do some tree shaking)
  const appChildren = process.env.NODE_ENV === 'production' ? children({ location }) : children();

  return (
    <div>
      <Header />
      <div className={styles.page}>{appChildren}</div>
    </div>
  );
};

export default Layout;
