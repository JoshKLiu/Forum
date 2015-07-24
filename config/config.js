var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'forum'
    },
    port: 3000,
    db: 'mongodb://localhost/forum-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'forum'
    },
    port: 3000,
    db: 'mongodb://localhost/forum-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'forum'
    },
    port: 3000,
    db: 'mongodb://localhost/forum-production'
  }
};

module.exports = config[env];
