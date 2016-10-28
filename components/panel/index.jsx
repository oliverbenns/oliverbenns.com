import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Wrapper from 'components/wrapper'

import styles from './styles.module.css'

export default class Panel extends Component {
  static propTypes = {
    children: PropTypes.any,
    to: PropTypes.string,
  };

  render() {
    return (
      <Link to={this.props.to} className={styles.panel}>
        <Wrapper>
          {this.props.children}
        </Wrapper>
      </Link>
    )
  }
}
