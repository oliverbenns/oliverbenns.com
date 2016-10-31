import React, { Component, PropTypes } from 'react';

import Wrapper from 'components/wrapper';

import styles from './styles.module.css';

export default class ProjectDescription extends Component {
  static propTypes = {
    cta: PropTypes.node,
    image: PropTypes.node,
  };

  render() {
    const { children, image } = this.props;

    return (
      <Wrapper className={styles.content}>
        <div className={styles.image}>
          {image}
        </div>

        <div className={styles.information}>
          {this.props.children}
        </div>
      </Wrapper>
    );
  }
}
