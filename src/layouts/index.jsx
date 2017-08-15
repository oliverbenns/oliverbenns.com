import React, { Component } from 'react';

import Header from '../components/header';

import styles from './styles.module.css';
import '../css/reset.css';
import '../css/document.css';
import '../css/typography.css';

// Need to pass in location here on build. On development it comes from the individual pages.
const Layout = ({ children, location }) => (
  <div>
    <Header />
    <div className={styles.page}>{children({ location })}</div>
  </div>
);

export default Layout;
