import React, { Component } from 'react'
import { IndexLink } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Hamburger from 'components/hamburger'
import Menu from 'components/menu'
import GitHubButton from 'react-github-button'
import Wrapper from 'components/wrapper'

import actions from 'assets/js/actions';
import store from 'assets/js/store';

import styles from './styles.module.css'
import 'react-github-button/assets/style.css';

export default class Header extends Component {
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

  render() {
    return (
      <header className={styles.header}>
        <Wrapper>
          <div className={styles.inner}>
            <h1 className={styles.title}>
              <IndexLink to={prefixLink('/')}>Oliver Benns</IndexLink>
            </h1>
            <GitHubButton type="stargazers" namespace="oliverbenns" repo="oliverbenns.com" />
            <Hamburger onClick={actions.toggleMenu.bind(this)} active={this.state.menuActive} className={styles.hamburger} />
          </div>
        </Wrapper>
        <Menu />
      </header>
    )
  }
}

