const BbPromise = require('bluebird');

const functions = {
  updateUserPoolClient(params) {
    return this.provider.request('CognitoIdentityServiceProvider', 'updateUserPoolClient', {
      ClientId: this.getUserPoolClientId(),
      UserPoolId: this.getUserPoolId(),
      ...params,
    });
  },
  setupUserPoolClient() {
    return this.updateUserPoolClient({
      SupportedIdentityProviders: ['COGNITO'],
    });
  },
};

module.exports = functions;
