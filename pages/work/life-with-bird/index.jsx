import React, { Component } from 'react';
import { projects } from 'data/projects.json';

import Carousel from 'components/carousel';
import Iphone from 'components/iphone';
import Macbook from 'components/macbook';
import OutboundLink from 'components/outbound-link';
import Wrapper from 'components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from 'components/project';

import coverImage from 'components/project/img/life-with-bird.jpg';

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
    description: 'Life with Bird product listing',
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

const mobileImages = [
  {
    src: require('./img/mobile-product-listing.jpg'),
    description: 'Life with Bird product listing mobile',
  },
  {
    src: require('./img/mobile-product.jpg'),
    description: 'Life with Bird product mobile',
  },
  {
    src: require('./img/mobile-cart.jpg'),
    description: 'Life with Bird cart mobile',
  }
];

export default class LifeWithBird extends Component {
  render() {
    const project = projects.find(_project => _project.slug === 'life-with-bird');

    const image = (
      <img src={coverImage} alt="Cover" />
    );

    const iphone = (
      <Iphone invert>
        <Carousel images={mobileImages} />
      </Iphone>
    );

    return (
      <ProjectPage project={project}>
        <ProjectIntro project={project} media={image} />
        <ProjectDescription media={iphone}>
          <h3>Project</h3>
          <p>Life with Bird gave us with the challenge of rebuilding their Shopify theme. Part of it&apos;s remit was to improve the user experience and include a much cleaner UI that matched their brand and achieved   more conversions. The current code and deployment solution also needed revisiting to be scalable and flexible.</p>

          <h3>Role</h3>
          <p>Whilst working at <OutboundLink to="http://inlight.com.au">Inlight</OutboundLink>, myself and 1 other developer worked together closely with the client to provide a solution they sought after. After looking at the current codebase, we realised that we needed to rebuild the existing solution. I was responsible for the majority of the delivery.</p>
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
