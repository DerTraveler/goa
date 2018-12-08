const fs = require('fs');

jest.mock('fs');

const GoaPlugin = require('../index');

describe('setupWebClient', () => {
  let plugin;

  const region = 'us-east-1';
  const userPoolId = 'user-pool';
  const userPoolClientId = 'user-pool-client';

  const serverlessMock = () => ({
    getProvider: jest.fn(),
    service: {
      provider: { region },
    },
  });

  beforeEach(async () => {
    plugin = new GoaPlugin(serverlessMock(), {});
    plugin.getUserPoolId = () => userPoolId;
    plugin.getUserPoolClientId = () => userPoolClientId;
    await plugin.setupWebClient();
  });

  it('writes the right environment variables to .env.production', () => {
    const expectedContent =
      `REACT_APP_REGION=${region}\n` +
      `REACT_APP_USER_POOL_ID=${userPoolId}\n` +
      `REACT_APP_USER_POOL_CLIENT_ID=${userPoolClientId}\n`;
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      './web-client/.env.production.local',
      expectedContent,
    );
  });
});
