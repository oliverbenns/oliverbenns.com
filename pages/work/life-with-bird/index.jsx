import React, { Component } from 'react';
import { projects } from 'data/projects.json';

import Carousel from 'components/carousel';
import Macbook from 'components/macbook';
import Wrapper from 'components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from 'components/project';

import coverImage from 'components/project/img/life-with-bird.jpg';
import styles from './styles.module.css';

const images = [
  {
    src: require('./img/collection-listing.jpg'),
    description: 'Life with Bird collection listing',
  },
  {
    src: require('./img/home.jpg'),
    description: 'Life with Bird home',
  },
  {
    src: require('./img/product-listing.jpg'),
    description: 'Life with Bird product listng',
  },
  {
    src: require('./img/product.jpg'),
    description: 'Life with Bird product',
  },
  {
    src: require('./img/store-listing.jpg'),
    description: 'Life with Bird store listing',
  },
];

export default class LifeWithBird extends Component {
  render() {
    const project = projects.find(_project => _project.slug === 'life-with-bird');

    const image = (
      <div className={styles.image}>
        <img src={coverImage} alt="Cover" />
      </div>
    );

    return (
      <ProjectPage project={project}>
        <ProjectIntro project={project} media={image} />
        <ProjectDescription>
          <h3>Project</h3>
          <p>After building their mobile website, Life with Bird left us with the challenge of rebuilding their current Shopify build. Part of it&apos;s remit was to improve the user experience and include a much cleaner UI that matched their brand and achieve more conversions. The current code and deployment solution also needed revisiting to be scalable and flexible.</p>

          <h3>Role</h3>

          <p>Whilst working at <a href="http://inlight.com.au" target="_blank" rel="noopener noreferrer">Inlight</a>, myself and 1 other developer worked together closely with the client to provide a solution they sought after. After visiting the current codebase, we realised that it we needed to rebuild the existing solution. I was responsible for the majority of the delivery.</p>
        </ProjectDescription>
        <Wrapper>
          <Macbook>
            <Carousel images={images} />
          </Macbook>
        </Wrapper>
      </ProjectPage>
    );
  }
}
