import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'
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
  }

  componentDidMount() {
    store.subscribe(this.handleStateChange.bind(this));
  }

  componentWillUnmount() {
    store.unsubscribe(this.handleStateChange.bind(this));
  }

  handleStateChange() {
    this.setState(store.data);
  }

  handleLinkClick() {
    actions.toggleMenu({ active: false });
  }

  render() {
    return (
      <Fullscreen className={this.state.menuActive ? styles.menu : styles.disable}>
        <Wrapper>
          <nav>
            <ul>
              <li className={styles.item}>
                <Link to={prefixLink('/')} onClick={this.handleLinkClick}>Home</Link>
              </li>
              <li className={styles.item}>
                <Link to={prefixLink('/about/')} onClick={this.handleLinkClick}>About</Link>
              </li>
              <li className={styles.item}>
                <Link to={prefixLink('/work/')} onClick={this.handleLinkClick}>Work</Link>
              </li>
              <li className={styles.item}>
                <Link to={prefixLink('/contact/')} onClick={this.handleLinkClick}>Contact</Link>
              </li>
            </ul>
          </nav>
        </Wrapper>
      </Fullscreen>
    );
  }
}
