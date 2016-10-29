import React, { Component } from 'react'
import Hamburger from 'components/hamburger'
import Menu from 'components/menu'
import Wrapper from 'components/wrapper'

import actions from 'assets/js/actions';
import store from 'assets/js/store';

import styles from './styles.module.css'

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
            <div className={styles.github}>
              <a className="github-button" href="https://github.com/oliverbenns/oliverbenns.com" data-icon="octicon-star" data-count-href="/oliverbenns/oliverbenns.com/stargazers" data-count-api="/repos/oliverbenns/oliverbenns.com#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star oliverbenns/oliverbenns.com on GitHub">Star</a>
            </div>
            <Hamburger onClick={actions.toggleMenu.bind(this)} active={this.state.menuActive} className={styles.hamburger} />
          </div>
        </Wrapper>
        <Menu />
      </header>
    )
  }
}

