import React from 'react';
import Meta from 'components/meta';
import Contact from 'components/contact';
import { ProjectPanel } from 'components/project';
import Wrapper from 'components/wrapper';

import { projects } from 'data/projects.json';

import styles from './styles.module.css';

const Work = () => (
  <div>
    <Meta title="Work" description="Web applications, static websites and mobile apps built built by or collaboratively with Oliver Benns." />

    {projects.map(project => <ProjectPanel project={project} key={project.slug} />)}

    <div className={styles.contact}>
      <Wrapper>
        <Contact title="Your project here?" />
      </Wrapper>
    </div>
  </div>
);

export default Work;
