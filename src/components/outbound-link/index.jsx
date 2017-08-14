import React from 'react';

const OutboundLink = props => (
  <a {...props} href={props.to} target="_blank" rel="noopener noreferrer">{props.children}</a>
);

export default OutboundLink;
