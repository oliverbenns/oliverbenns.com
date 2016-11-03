import React, { Component, PropTypes } from 'react';

import Icon from 'components/icon';

import styles from './styles.module.css';

export default class Contact extends Component {
  static propTypes = {
    title: PropTypes.string,
  }

  render() {
    return (
      <div className={styles.contact}>
        <h1>{this.props.title || 'I like messages.'}</h1>
        <p className={styles.email}>
          Say hello and send an email:<br />
          <a href="mailto:info@oliverbenns.com?subject=Hello%20Oliver!" className={styles.link}>info@oliverbenns.com</a>
        </p>
        <div className={styles.lineBreak} />
        <ul className={styles.social}>
          <li>
            <a href="https://github.com/oliverbenns/" target="_blank" rel="noopener noreferrer">
              <Icon name="github" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/oliverbenns/" target="_blank" rel="noopener noreferrer">
              <Icon name="twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/oliverbenns" target="_blank" rel="noopener noreferrer">
              <Icon name="instagram" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
