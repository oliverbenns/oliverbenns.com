import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Wrapper from 'components/wrapper'

import styles from './styles.module.css'

export default class ProjectPanel extends Component {
  static propTypes = {
    children: PropTypes.any,
    project: PropTypes.object,
  };

  render() {
    const { project } = this.props;

    return (
      <Link to={prefixLink(`/work/${project.slug}/`)} className={styles[project.className]}>
        <Wrapper>
          <div className={styles.content}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        </Wrapper>
      </Link>
    )
  }
}
