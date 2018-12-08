const GoaPlugin = require('../index');

describe('setupUserPoolClient', () => {
  let plugin;

  const serverlessMock = () => ({
    getProvider: jest.fn(),
  });

  beforeEach(async () => {
    plugin = new GoaPlugin(serverlessMock(), {});
    plugin.updateUserPoolClient = jest.fn();
    await plugin.setupUserPoolClient();
  });

  it('updates the user pool client', () => {
    expect(plugin.updateUserPoolClient).toHaveBeenCalledWith({
      SupportedIdentityProviders: ['COGNITO'],
    });
  });
});
