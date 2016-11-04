import React, { Component } from 'react';
import Meta from 'components/meta';
import Contact from 'components/contact';
import { ProjectPanel } from 'components/project';
import Wrapper from 'components/wrapper';

import { projects } from 'data/projects.json';

import styles from './styles.module.css';

export default class Work extends Component {
  render() {
    return (
      <div>
        <Meta title="Work" description="Web applications, static websites and mobile apps built built by or collaboratively with Oliver Benns." />

        {projects.map(project => <ProjectPanel project={project} key={project.slug} />)}

        <div className={styles.contact}>
          <Wrapper>
            <Contact title="Your project could be here." />
          </Wrapper>
        </div>
      </div>
    );
  }
}
