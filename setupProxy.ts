import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `${window.location.href}/:8000`,
    })
  );
};
