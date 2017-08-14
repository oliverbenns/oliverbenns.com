import React, { Component } from 'react';

import Header from '../components/header';

import styles from './styles.module.css';
import '../css/reset.css';
import '../css/document.css';
import '../css/typography.css';

const Layout = ({ children }) => (
  <div>
    <Header />
    <div className={styles.page}>{children()}</div>
  </div>
);

export default Layout;
