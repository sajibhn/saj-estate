module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['GwfB3Xa4Mgm59NcO3TlX0w ==', 'A3nZ31Z + PxGQj346BvMjdg ==', 'o + yb / ynDQb5kkqtBBfRo9w ==', 'zJBu25EopkHzOIXlH9muNA ==']),
  },
});
