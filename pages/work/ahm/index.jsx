import React, { Component } from 'react';
import { projects } from 'data/projects.json';

import Carousel from 'components/carousel';
import Macbook from 'components/macbook';
import Wrapper from 'components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from 'components/project';

import coverImage from 'components/project/img/ahm.png';
import styles from './styles.module.css';

const images = [
  {
    src: require('./img/product.jpg'),
    description: 'Ahm product',
  },
  {
    src: require('./img/products.jpg'),
    description: 'Ahm product listing',
  },
  {
    src: require('./img/modal.jpg'),
    description: 'Ahm ambulance services modal',
  },
  {
    src: require('./img/home.jpg'),
    description: 'Ahm home',
  },
  {
    src: require('./img/manage.jpg'),
    description: 'Ahm manage health over',
  },
  {
    src: require('./img/extras.jpg'),
    description: 'Ahm add extras',
  },
];

export default class Ahm extends Component {
  render() {
    const project = projects.find(_project => _project.slug === 'ahm');

    const logo = (
      <div className={styles.image}>
        <img src={coverImage} alt="Cover" />
      </div>
    );

    return (
      <ProjectPage project={project}>
        <ProjectIntro project={project} media={logo} />
        <ProjectDescription>
          <h3>Project</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>

          <h3>Role</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
        </ProjectDescription>
        <Wrapper>
          <Macbook>
            <Carousel images={images}/>
          </Macbook>
        </Wrapper>
      </ProjectPage>
    );
  }
}
