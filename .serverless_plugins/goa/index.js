'use strict';

require('./lib/env');

const BbPromise = require('bluebird');

const helper = require('./lib/helper');
const setupUserPoolClient = require('./lib/setupUserPoolClient');

class GoaPlugin {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;
    this.provider = this.serverless.getProvider('aws');

    Object.assign(this, helper, setupUserPoolClient);

    this.commands = {
      'setup-goa': {
        lifecycleEvents: ['execute'],
      },
    };

    this.hooks = {
      'setup-goa:execute': () =>
        BbPromise.bind(this)
          .then(this.retrievePhysicalIds)
          .then(this.setupUserPoolClient),
    };
  }
}

module.exports = GoaPlugin;
