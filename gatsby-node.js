// exports.modifyWebpackConfig = function modifyWebpackConfig(config) {
//   // Open graph share image is currently < 10,000 bytes (Gatsby webpack config limit) after run through pngquant.
//   // This image must be a url, not base64. Limit still good to prevent more http reqs for small favicons.
//   config.loader('images', cfg => {
//     /* eslint-disable no-param-reassign */
//     cfg.loaders[0] = 'url?limit=2500';
//     /* eslint-enable no-param-reassign */
//     return cfg;
//   });

//   return config;
// };
