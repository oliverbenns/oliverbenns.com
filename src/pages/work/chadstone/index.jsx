import React from 'react';
import projects from '../../../data/projects.js';

import Carousel from '../../../components/carousel';
import Iphone from '../../../components/iphone';
import Macbook from '../../../components/macbook';
import OutboundLink from '../../../components/outbound-link';
import Wrapper from '../../../components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from '../../../components/project';

const images = {
  desktop: [
    { src: require('./img/dining.jpg'), description: 'Chadstone dining' },
    { src: require('./img/home.jpg'), description: 'Chadstone home' },
    { src: require('./img/services.jpg'), description: 'Chadstone services' },
    { src: require('./img/store.jpg'), description: 'Chadstone store' },
    { src: require('./img/whats-on.jpg'), description: 'Chadstone what\'s on' },
  ],
  mobile: [
    { src: require('./img/mobile-about.jpg'), description: 'Chadstone about us mobile' },
    { src: require('./img/mobile-article.jpg'), description: 'Chadstone article mobile' },
    { src: require('./img/mobile-directions.jpg'), description: 'Chadstone directions mobile' },
    { src: require('./img/mobile-shopping.jpg'), description: 'Chadstone shopping mobile' },
    { src: require('./img/mobile-store.jpg'), description: 'Chadstone store mobile' },
  ],
};

const Chadstone = ({ location }) => {
  const project = projects.find(p => p.slug === 'chadstone');

  const image = (
    <img src={project.cover} alt="Cover" />
  );

  const iphone = (
    <Iphone>
      <Carousel images={images.mobile} />
    </Iphone>
  );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro project={project} media={image} />
      <ProjectDescription media={iphone}>
        <h3>Project</h3>
        <p>Soon to be unveiling the mall’s new shopping, dining &amp; entertainment precincts, Chadstone was keen to revisit their online presence and website in line with the new development. <OutboundLink to="http://inlight.com.au">Inlight</OutboundLink> was tasked with building a new website that offered information on stores, entertainment, events and an intuitive mapping solution.</p>

        <h3>Role</h3>
        <p>I was part of a development team that helped produce a solution over the space of a few months. I was mainly responsible for building components and UI in the build and handling application state, but also worked on the api. I am most proud of the getting there page, which included a Google Maps integration that helped users get to the shopping mall and provided taxi and Uber estimations.</p>
      </ProjectDescription>
      <Wrapper>
        <Macbook>
          <Carousel images={images.desktop} />
        </Macbook>
      </Wrapper>
    </ProjectPage>
  );
};

export default Chadstone;
