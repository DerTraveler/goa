const crypto = require('crypto');
const fs = require('fs');

const BbPromise = require('bluebird');

const { ENV_FILE_LOCAL } = require('./env');

const functions = {
  createUserPoolDomain(params) {
    return this.provider.request('CognitoIdentityServiceProvider', 'createUserPoolDomain', params);
  },
  generateDomain() {
    return this.provider.getAccountId().then(accountId => {
      const suffix = crypto
        .createHash('sha256')
        .update(`${accountId}-${new Date().toISOString()}`)
        .digest('hex')
        .slice(32);
      return `${this.provider.naming.getStackName()}-${suffix}`;
    });
  },
  saveDomain(domain) {
    let newContent = `USER_POOL_DOMAIN=${domain}\n`;
    if (fs.existsSync(ENV_FILE_LOCAL)) {
      newContent += fs.readFileSync(ENV_FILE_LOCAL, { encoding: 'utf8' });
    }
    fs.writeFileSync(ENV_FILE_LOCAL, newContent);

    process.env.USER_POOL_DOMAIN = domain;
  },
  setupUserPoolDomain() {
    if (process.env.USER_POOL_DOMAIN) {
      this.serverless.cli.log('User Pool Domain already exists. Skipping creation.');
      return BbPromise.resolve();
    }
    this.serverless.cli.log('Creating User Pool Domain...');
    let Domain;
    const UserPoolId = this.getUserPoolId();
    return this.generateDomain()
      .then(domain => {
        Domain = domain;

        return this.createUserPoolDomain({
          Domain,
          UserPoolId,
        });
      })
      .catch(err => {
        if (err.message === 'User pool already has a domain configured.') {
          const { region } = this.serverless.service.provider;
          const consoleUrl =
            `https://${region}.console.aws.amazon.com/cognito/users/` +
            `?region=${region}#/pool/${UserPoolId}/app-integration-domain`;
          return BbPromise.reject(
            new this.serverless.classes.Error(
              'User pool has already a domain configured.\n' +
                '  Please look up the domain prefix in the AWS console at following URL:\n' +
                `    ${consoleUrl}\n` +
                '  and set it as USER_POOL_DOMAIN in your .env.local file before continuing.',
            ),
          );
        }
        return BbPromise.reject(err);
      })
      .then(response => {
        this.serverless.cli.log('User Pool Domain created successfully');
        this.saveDomain(Domain);
        return BbPromise.resolve();
      });
  },
};

module.exports = functions;
