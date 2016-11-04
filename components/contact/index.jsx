import React, { Component, PropTypes } from 'react';

import Icon from 'components/icon';
import OutboundLink from 'components/outbound-link';

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
            <OutboundLink to="https://github.com/oliverbenns/">
              <Icon name="github" />
            </OutboundLink>
          </li>
          <li>
            <OutboundLink to="https://www.linkedin.com/in/oliverbenns">
              <Icon name="linkedin" />
            </OutboundLink>
          </li>
          <li>
            <OutboundLink to="https://twitter.com/oliverbenns/">
              <Icon name="twitter" />
            </OutboundLink>
          </li>
          <li>
            <OutboundLink to="https://www.instagram.com/oliverbenns">
              <Icon name="instagram" />
            </OutboundLink>
          </li>
        </ul>
      </div>
    );
  }
}
