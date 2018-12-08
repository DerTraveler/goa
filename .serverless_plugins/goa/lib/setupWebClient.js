const fs = require('fs');

const BbPromise = require('bluebird');
const _ = require('lodash');

const functions = {
  WEB_CLIENT_ENV: './web-client/.env.production.local',
  setupWebClient() {
    const envs = {
      REACT_APP_REGION: this.serverless.service.provider.region,
      REACT_APP_USER_POOL_ID: this.getUserPoolId(),
      REACT_APP_USER_POOL_CLIENT_ID: this.getUserPoolClientId(),
    };
    const content = _.map(envs, (value, key) => `${key}=${value}\n`).join('');
    fs.writeFileSync(this.WEB_CLIENT_ENV, content);
    return BbPromise.resolve();
  },
};

module.exports = functions;
