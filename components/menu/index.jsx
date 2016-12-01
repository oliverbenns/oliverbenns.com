import React, { Component, PropTypes } from 'react';
import { prefixLink } from 'gatsby-helpers';

import Fullscreen from 'components/fullscreen';
import Wrapper from 'components/wrapper';
import { IndexLink, Link } from 'react-router';

import styles from './styles.module.css';

export default class Menu extends Component {
  static propTypes = {
    active: PropTypes.bool,
    onNavClick: PropTypes.func,
  };

  render() {
    const linkProps = {
      onClick: this.props.onNavClick,
      activeClassName: styles.active,
    };

    return (
      <Fullscreen className={this.props.active ? styles.menu : styles.disable}>
        <Wrapper>
          <nav>
            <ul>
              <li className={styles.item}>
                <IndexLink {...linkProps} to={prefixLink('/')}>Home</IndexLink>
              </li>
              <li className={styles.item}>
                <Link {...linkProps} to={prefixLink('/about/')}>About</Link>
              </li>
              <li className={styles.item}>
                <Link {...linkProps} to={prefixLink('/work/')}>Work</Link>
              </li>
              <li className={styles.item}>
                <Link {...linkProps} to={prefixLink('/contact/')}>Contact</Link>
              </li>
            </ul>
          </nav>
        </Wrapper>
      </Fullscreen>
    );
  }
}
