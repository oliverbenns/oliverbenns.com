import React from 'react';
import Link from 'gatsby-link';

import ContentPage from '../../components/content-page';
import Meta from '../../components/meta';
import OutboundLink from '../../components/outbound-link';
import Wrapper from '../../components/wrapper';

import styles from './styles.module.css';

const About = () => (
  <ContentPage>
    <Meta title="About" />
    <Wrapper>
      <div className={styles.intro}>
        <h1>Hello world.</h1>
        <p>I’m a freelance web developer currently situated in Norwich, United Kingdom. I’ve had the pleasure to be in the industry for 4 years.</p>
        <p>I first began my journey into code whilst studying Multimedia at <OutboundLink to="https://twitter.com/oliverbenns/status/345433447810101248">Nottingham Trent University</OutboundLink>. During my final year, I juggled assignments with part time work at <OutboundLink to="http://wearejh.com">JH</OutboundLink> where I maintained existing e-commerce websites by squashing bugs and adding new features. I gained a considerable amount of experience that I needed to step into the industry.</p>

        <p>Once obtaining my degree, I flew to Melbourne, Australia and worked with <OutboundLink to="http://inlight.com.au">Inlight</OutboundLink> for 3 years. I was responsible for the front end web development of various projects, such as web applications, mobile apps, static websites, online stores and blogs. With the variety of work and my attitude towards learning, I quickly grew from a graduate into a dependable, valuable front end developer that could work both solo and in teams.</p>

        <p>I now work on a freelance basis working on both ideas of my own and others. If you have a project in mind, <Link to="/contact">get in touch</Link>.</p>

        <h2>Technical skills</h2>

        <h4>Presentation</h4>
        <p>Bootstrap, Css, Html, Less, Postcss, Sass, Stylus</p>
        <h4>Javascript</h4>
        <p>Angular, Grunt, Gulp, jQuery, Pug, React, Webpack</p>
        <h4>Server</h4>
        <p>Express, Mongo, Node, SQL</p>
        <h4>Other</h4>
        <p>CI, Git, Svn, Unity 3D</p>

        <h2>What people say</h2>

        <h4>Patrick Carne, Lighthouse</h4>
        <p>“Over the last 3 years Oliver has grown into a solid front-end developer, with an ability and eagerness to pick up new technologies quickly. I have no doubt Oliver will go on to be an exceptional developer in any area he chooses to focus.”</p>

        <h4>Sina Karimi, Inlight</h4>
        <p>“Oliver is an exceptional front end developer. He has grown rapidly over the past few years to be a valuable member of any development team. It has been a real pleasure to work with him over the years.”</p>
      </div>
    </Wrapper>
  </ContentPage>
);

export default About;
