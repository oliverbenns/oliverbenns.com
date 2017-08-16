import React from 'react';
import projects from '../../../data/projects';

import Carousel from '../../../components/carousel';
import Iphone from '../../../components/iphone';
import { ProjectDescription, ProjectIntro, ProjectPage } from '../../../components/project';

import backgroundStyles from './background.module.css';
import styles from './styles.module.css';

const images = [
  { src: require('./img/home.png'), description: 'Mr. Red app home' },
  { src: require('./img/in-game.png'), description: 'Mr. Red app in game' },
  { src: require('./img/end-screen.png'), description: 'Mr. Red app end screen' },
];

const MrRed = ({ location }) => {
  const project = projects.find(p => p.slug === 'mr-red');

  const image = (
    <div className={styles.avatar}>
      <img src={project.cover} alt="Cover" />
    </div>
  );

  const iphone = (
    <div className={styles.iphone}>
      <Iphone>
        <Carousel images={images} />
      </Iphone>
    </div>
  );

  return (
    <ProjectPage project={project} location={location} className={backgroundStyles.page}>
      <div className={backgroundStyles.background1} />
      <div className={backgroundStyles.background2} />
      <div className={backgroundStyles.background3} />

      <div className={backgroundStyles.content}>
        <ProjectIntro project={project} media={image} />
        <ProjectDescription media={iphone}>
          <h3>Project</h3>
          <p>I have always enjoyed video games and have wondered what it would be like to actually make one. The project’s goal was to appreciate and understand game development at a high level, as well as to publish something for myself.</p>

          <h3>Result</h3>
          <p>I used the Unity 3D game engine to develop Mr. Red. Despite the simplicity of the game, it took a considerable amount of time to learn the interface, the C# language and how to put it all together. On top of this, I also created the game assets and learnt how to publish to Apple’s iOS platform. Despite the challenges I feel that I learnt a lot and I’m proud to have been able to publish my first game. I look forward to creating a similar project soon.</p>
        </ProjectDescription>
      </div>
    </ProjectPage>
  );
};

export default MrRed;
