import React, { PropTypes } from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

const ContentPage = ({ children, className }) => (
  <section className={classNames(styles.content, className)}>
    {children}
  </section>
);

ContentPage.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ContentPage;
