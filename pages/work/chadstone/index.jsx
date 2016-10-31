import React, { Component } from 'react';
import { projects } from 'data/projects.json';

import Wrapper from 'components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from 'components/project';

import coverImage from 'components/project/img/chadstone.jpg';

export default class Chadstone extends Component {
  render() {
    const project = projects.find(_project => _project.slug === 'chadstone');

    const image = (
      <img src={coverImage} />
    );

    return (
      <ProjectPage project={project}>
        <ProjectIntro project={project} image={image} />
        <ProjectDescription>
          <h3>Project</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>

          <h3>Role</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
        </ProjectDescription>
      </ProjectPage>
    );
  }
}
