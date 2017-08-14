import React from 'react';
import Link from 'gatsby-link';

import Fullscreen from '../fullscreen';
import Wrapper from '../wrapper';

import styles from './styles.module.css';

const Menu = ({ active, onNavClick }) => {
  const linkProps = {
    onClick: onNavClick,
    // activeClassName: styles.active,
  };

  return (
    <Fullscreen className={active ? styles.menu : styles.disable}>
      <Wrapper>
        <nav>
          <ul>
            <li className={styles.item}>
              <Link {...linkProps} to="/">Home</Link>
            </li>
            <li className={styles.item}>
              <Link {...linkProps} to="/about">About</Link>
            </li>
            <li className={styles.item}>
              <Link {...linkProps} to="/work">Work</Link>
            </li>
            <li className={styles.item}>
              <Link {...linkProps} to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </Wrapper>
    </Fullscreen>
  );
};

export default Menu;
