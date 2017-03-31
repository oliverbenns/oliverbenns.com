import React, { PropTypes } from 'react';
import { prefixLink } from 'gatsby-helpers';

import Fullscreen from 'components/fullscreen';
import Wrapper from 'components/wrapper';
import { IndexLink, Link } from 'react-router';

import styles from './styles.module.css';

const Menu = ({ active, onNavClick }) => {
  const linkProps = {
    onClick: onNavClick,
    activeClassName: styles.active,
  };

  return (
    <Fullscreen className={active ? styles.menu : styles.disable}>
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
};

Menu.propTypes = {
  active: PropTypes.bool,
  onNavClick: PropTypes.func,
};

export default Menu;
