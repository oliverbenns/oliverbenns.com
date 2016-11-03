import React, { Component } from 'react';
import { config } from 'config';

import ContentPage from 'components/content-page';
import Helmet from 'react-helmet';
import OutboundLink from 'components/outbound-link';
import Wrapper from 'components/wrapper';

import styles from './styles.module.css';

export default class About extends Component {
  render() {
    return (
      <ContentPage>
        <Helmet
          title={`About | ${config.siteTitle}`}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Wrapper>
          <div className={styles.intro}>
            <h1>Hello world.</h1>
            <p>I'm a web developer currently situated in Norwich, United Kingdom and had the pleasure to be in the industry for 4 years.</p>
            <p>I first began my journey into code whilst studying at <OutboundLink to="https://twitter.com/oliverbenns/status/345433447810101248">Nottingham Trent University</OutboundLink>. During my final year, I also helped maintain e-commerce solutions for existing clients at <OutboundLink to="http://wearejh.com">JH</OutboundLink>.</p>
            <p>After obtaining my degree, I flew to Australia, where I worked with Melbourne based agency <OutboundLink to="http://inlight.com.au">Inlight</OutboundLink> for 3 years. I spent my time there on a variety of projects such as advanced web applications, mobile apps, static websites, e-commerce and blogs.</p>
            <p>I now work on a freelance basis working on both ideas of my own and others. If you have a project in mind, do get in touch.</p>

            <h2>Technical skills</h2>

            <h4>Presentation</h4>
            <p>Bootstrap, Html, Less, Postcss, Sass, Stylus</p>
            <h4>Javascript</h4>
            <p>Angular, Grunt, Gulp, jQuery, Pug, React, Webpack</p>
            <h4>Server</h4>
            <p>Express, Mongo, Node, SQL</p>
            <h4>Other</h4>
            <p>CI, Git, Svn</p>

            <h2>What people say</h2>

            <h4>Patrick Carne, Lighthouse</h4>
            <p>“Over the last 3 years Oliver has grown into a solid front-end developer, with an ability and eagerness to pick up new technologies quickly. I have no doubt Oliver will go on to be an exceptional developer in any area he chooses to focus.”</p>

            <h4>Sina Karimi, Inlight</h4>
            <p>“Oliver is an exceptional front end developer. He has grown rapidly over the past few years to be a valuable member of any development team. It has been a real pleasure to work with him over the years.”</p>
          </div>
        </Wrapper>
      </ContentPage>
    );
  }
}
