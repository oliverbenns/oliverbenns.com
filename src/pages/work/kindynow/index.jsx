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
    { src: require('./img/centre-detail.png'), description: 'KindyNow centre detail' },
    { src: require('./img/attendees.png'), description: 'KindyNow attendees list' },
    { src: require('./img/centre-list.png'), description: 'KindyNow centre list' },
    { src: require('./img/stats.png'), description: 'KindyNow centre stats' },
    { src: require('./img/login.png'), description: 'KindyNow login' },
  ],
  mobile: [
    { src: require('./img/mobile-centre-detail.png'), description: 'kindyNow centre detail rooms' },
    { src: require('./img/mobile-centre-detail-rooms.png'), description: 'kindyNow centre detail' },
    { src: require('./img/mobile-attendees.png'), description: 'kindyNow attendees list' },
    { src: require('./img/mobile-centre-list.png'), description: 'kindyNow centre list' },
    { src: require('./img/mobile-calendar.png'), description: 'kindyNow calendar date picker' },
  ],
};

const KindyNow = ({ location }) => {
  const project = projects.find(p => p.slug === 'kindynow');

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
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

        <h3>Role</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
      </ProjectDescription>
      <Wrapper>
        <Macbook>
          <Carousel images={images.desktop} />
        </Macbook>
      </Wrapper>
    </ProjectPage>
  );
};

export default KindyNow;
