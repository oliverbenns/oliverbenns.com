import React from 'react';
import projects from '../../../data/projects';

import Carousel from '../../../components/carousel';
import Iphone from '../../../components/iphone';
import Macbook from '../../../components/macbook';
import OutboundLink from '../../../components/outbound-link';
import Wrapper from '../../../components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from '../../../components/project';

const images = [
  { src: require('./img/centre-detail.png'), description: 'Click Childcare App Centre Detail' },
  { src: require('./img/register.png'), description: 'Click Childcare App Registration Form' },
  { src: require('./img/booking.png'), description: 'Click Childcare App Calendar Booking' },
  { src: require('./img/profile.png'), description: 'Click Childcare App Login/Register' },
];

const Click = ({ location }) => {
  const project = projects.find(p => p.slug === 'click-childcare');

  const image = (
    <img src={project.cover} alt="Cover" />
  );

  const iphone = (
    <Iphone>
      <Carousel images={images} />
    </Iphone>
  );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro project={project} media={image} />
      <ProjectDescription media={iphone}>
        <h3>Project</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

        <h3>Role</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
      </ProjectDescription>
    </ProjectPage>
  );
};

export default Click;
