import React from 'react';
import projects from '../../../data/projects';

import Carousel from '../../../components/carousel';
import Iphone from '../../../components/iphone';
import Macbook from '../../../components/macbook';
import OutboundLink from '../../../components/outbound-link';
import Wrapper from '../../../components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from '../../../components/project';

import styles from './styles.module.css';

const images = [
  { src: require('./img/centre-detail.png'), description: 'Click Childcare App Centre Detail' },
  { src: require('./img/register.png'), description: 'Click Childcare App Registration Form' },
  { src: require('./img/booking.png'), description: 'Click Childcare App Calendar Booking' },
  { src: require('./img/profile.png'), description: 'Click Childcare App Login/Register' },
];

const Click = ({ location }) => {
  const project = projects.find(p => p.slug === 'click-childcare');

  const image = (
    <div className={styles.image}>
      <img src={project.cover} alt="Cover" />
    </div>
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
        <p>After working with KindyNow previously, the company approached me to provide updates, bug fixes and maintenance for their existing app over a 2 month period. Initially the React Native project was refactored in certain areas to get it in a state in which further work could begin. Afterwards, the updates were generally minor functionality changes and UI tweaks, though I also delivered an improved deployment process that allowed future updates to be shipped at a much faster rate.</p>
      </ProjectDescription>
    </ProjectPage>
  );
};

export default Click;
