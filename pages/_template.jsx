import React, { Component, PropTypes } from 'react'
import Header from 'components/header'

import 'assets/css/reset.css'
import 'assets/css/document.css'
import 'assets/css/typography.css'

export default class Template extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    return (
      <div>
        <Header />
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
