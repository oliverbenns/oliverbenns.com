import React from 'react';
import Link from 'gatsby-link';

import ContentPage from '../../components/content-page';
import Meta from '../../components/meta';
import OutboundLink from '../../components/outbound-link';
import Wrapper from '../../components/wrapper';

import ahmSrc from './img/ahm.png';
import inlightSrc from './img/inlight.png';
import lighthouseSrc from './img/lighthouse.png';


import styles from './styles.module.css';

const About = ({ location }) => (
  <ContentPage>
    <Meta title="About" location={location} />
    <Wrapper>
      <div className={styles.about}>
        <section className={styles.intro}>
          <h1>Hello world.</h1>
          <p>I’m a freelance web developer currently situated in Norwich, United Kingdom. I’ve had the pleasure to be in the industry for 4 years.</p>
          <p>I first began my journey into code whilst studying Multimedia at <OutboundLink to="https://twitter.com/oliverbenns/status/345433447810101248">Nottingham Trent University</OutboundLink>. During my final year, I juggled assignments with part time work at <OutboundLink to="http://wearejh.com">JH</OutboundLink> where I maintained existing e-commerce websites by squashing bugs and adding new features. I gained a considerable amount of experience that I needed to step into the industry.</p>

          <p>Once obtaining my degree, I flew to Melbourne, Australia and worked with <OutboundLink to="http://inlight.com.au">Inlight</OutboundLink> for 3 years. I was responsible for the front end web development of various projects, such as web applications, mobile apps, static websites, online stores and blogs. With the variety of work and my attitude towards learning, I quickly grew from a graduate into a dependable, valuable front end developer that could work both solo and in teams.</p>

          <p>I now work on a freelance basis working on both ideas of my own and others. If you have a project in mind, <Link to="/contact">get in touch</Link>.</p>
        </section>
        <aside className={styles.skills}>
            <div>
              <h3>Skills</h3>
              <h4>Presentation</h4>
              <p>Bootstrap, Css, Html, Less, Postcss, Sass, Stylus</p>
              <h4>Javascript</h4>
              <p>Angular, Grunt, Gulp, jQuery, Pug, React, React Native, Redux, Webpack</p>
              <h4>Server</h4>
              <p>Express, Mongo, Node, SQL</p>
              <h4>Other</h4>
              <p>C, CI, Git, Svn, Unity 3D</p>
            </div>

          </aside>
      </div>

      <section>
        <h2>What people say</h2>
          <div className={styles.referrals}>
            <div className={styles.referral}>
              <img src={lighthouseSrc} alt="Lighthouse logo" />
              <div>
                <h4>Patrick Carne, Lighthouse</h4>
                <p>“Over the last 3 years Oliver has grown into a solid front-end developer, with an ability and eagerness to pick up new technologies quickly. I have no doubt Oliver will go on to be an exceptional developer in any area he chooses to focus.”</p>
              </div>
            </div>

            <div className={styles.referral}>
              <img src={inlightSrc} alt="Inlight logo" />
                <div>
                  <h4>Sina Karimi, Inlight</h4>
                  <p>“Oliver is an exceptional front end developer. He has grown rapidly over the past few years to be a valuable member of any development team. It has been a real pleasure to work with him over the years.”</p>
                </div>
            </div>

            <div className={styles.referral}>
              <img src={ahmSrc} alt="Ahm logo" />
                <div>
                  <h4>James Hanley, Ahm</h4>
                  <p>“I worked with Oliver on a number of projects for the Ahm websites. When a new brief would come in he was consultative and logical in his approach to help us define a solution to our business problem. His collaborative approach and comfort with clients/business makes him a great addition to a digital development team.”</p>
                </div>
            </div>
          </div>
      </section>
    </Wrapper>
  </ContentPage>
);

export default About;
