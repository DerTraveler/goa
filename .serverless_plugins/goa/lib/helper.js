const BbPromise = require('bluebird');
const _ = require('lodash');

const functions = {
  retrievePhysicalIds() {
    return this.provider.getStackResources().then(resources => {
      this.physicalIds = {};
      _.forEach(resources, resource => {
        this.physicalIds[resource.LogicalResourceId] = resource.PhysicalResourceId;
      });
      return BbPromise.resolve();
    });
  },
  getUserPoolId() {
    return this.physicalIds['UserPool'];
  },
};

module.exports = functions;
