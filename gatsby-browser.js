import ReactGA from 'react-ga';

let pageViewCount = 0;

exports.onRouteUpdate = function onRouteUpdate() {
  if (pageViewCount === 0) {
    ReactGA.initialize(process.env.NODE_ENV === 'production' ? 'UA-42854706-1' : 'UA-00000000-0');
  }

  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);

  pageViewCount += 1;
};
