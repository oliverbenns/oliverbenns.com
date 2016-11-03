import React, { Component, PropTypes } from 'react';

export default class OutboundLink extends Component {
  static propTypes = {
    children: PropTypes.node,
    to: PropTypes.string, // Follow react router props for consistency
  };

  render() {
    return (
      <a {...this.props} href={this.props.to} target="_blank" rel="noopener noreferrer">{this.props.children}</a>
    );
  }
}
