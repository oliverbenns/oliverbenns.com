import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Fullscreen from 'components/fullscreen'
import Wrapper from 'components/wrapper'

import actions from 'assets/js/actions';
import store from 'assets/js/store';

import styles from './styles.module.css'

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = store.data;
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentDidMount() {
    store.subscribe(this.handleStateChange.bind(this));
    // @TODO: Remove this event listener when menu isn't open.
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    store.unsubscribe(this.handleStateChange.bind(this));
  }

  handleKeyPress(event) {
    if (event.keyCode === 27) {
      this.close();
    }
  }

  handleStateChange() {
    this.setState(store.data);
  }

  close() {
    actions.toggleMenu({ active: false });
  }

  render() {

    const linkProps = {
      onClick: this.close,
      activeClassName: styles.active
    };

    return (
      <Fullscreen className={this.state.menuActive ? styles.menu : styles.disable}>
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
