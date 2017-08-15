import React from 'react';
import projects from '../../../data/projects';

import Carousel from '../../../components/carousel';
import Iphone from '../../../components/iphone';
import Macbook from '../../../components/macbook';
import OutboundLink from '../../../components/outbound-link';
import Wrapper from '../../../components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from '../../../components/project';

const images = {
  desktop: [
    { src: require('./img/collection-listing.jpg'), description: 'Life with Bird collection listing' },
    { src: require('./img/home.jpg'), description: 'Life with Bird home' },
    { src: require('./img/product-listing.jpg'), description: 'Life with Bird product listing' },
    { src: require('./img/product.jpg'), description: 'Life with Bird product' },
    { src: require('./img/store-listing.jpg'), description: 'Life with Bird store listing' },
  ],
  mobile: [
    { src: require('./img/mobile-product-listing.jpg'), description: 'Life with Bird product listing mobile' },
    { src: require('./img/mobile-product.jpg'), description: 'Life with Bird product mobile' },
    { src: require('./img/mobile-cart.jpg'), description: 'Life with Bird cart mobile' },
  ],
};

const LifeWithBird = ({ location }) => {
  const project = projects.find(_project => _project.slug === 'life-with-bird');

  const image = (
    <img src={project.cover} alt="Cover" />
  );

  const iphone = (
    <Iphone invert>
      <Carousel images={images.mobile} />
    </Iphone>
  );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro project={project} media={image} />
      <ProjectDescription media={iphone}>
        <h3>Project</h3>
        <p>Life with Bird gave us with the challenge of rebuilding their Shopify theme. Part of it&apos;s remit was to improve the user experience and include a much cleaner UI that matched their brand and achieved   more conversions. The current code and deployment solution also needed revisiting to be scalable and flexible.</p>

        <h3>Role</h3>
        <p>Whilst working at <OutboundLink to="http://inlight.com.au">Inlight</OutboundLink>, myself and 1 other developer worked together closely with the client to provide a solution they sought after. After looking at the current codebase, we realised that we needed to rebuild the existing solution. I was responsible for the majority of the delivery.</p>
      </ProjectDescription>
      <Wrapper>
        <Macbook>
          <Carousel images={images.desktop} />
        </Macbook>
      </Wrapper>
    </ProjectPage>
  );
};

export default LifeWithBird;
