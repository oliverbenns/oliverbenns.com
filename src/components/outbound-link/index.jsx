import React, { PropTypes } from 'react';

const OutboundLink = props => (
  <a {...props} href={props.to} target="_blank" rel="noopener noreferrer">{props.children}</a>
);

OutboundLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string, // Follow react router props for consistency
};

export default OutboundLink;
