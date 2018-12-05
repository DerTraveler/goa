const fs = require('fs');
jest.mock('fs');

const { ENV_FILE_LOCAL } = require('./env');

const GoaPlugin = require('../index');

describe('setupUserPoolDomain', () => {
  let plugin;

  const serverlessMock = () => ({
    cli: {
      log: jest.fn(),
    },
    getProvider: jest.fn(),
  });

  beforeEach(() => {
    plugin = new GoaPlugin(serverlessMock(), {});
  });

  afterEach(() => {
    if (process.env.USER_POOL_DOMAIN) {
      delete process.env.USER_POOL_DOMAIN;
    }
  });

  describe('setupUserPoolDomain', () => {
    const Domain = 'domain';
    const UserPoolId = 'userpool-id';

    beforeEach(() => {
      plugin.getUserPoolId = () => UserPoolId;
      plugin.generateDomain = () => Promise.resolve(Domain);
      plugin.createUserPoolDomain = jest.fn();
      plugin.saveDomain = jest.fn();
    });

    describe('If the domain does not exist yet', () => {
      beforeEach(async () => {
        await plugin.setupUserPoolDomain();
      });

      it('creates the User Pool Domain', () => {
        expect(plugin.createUserPoolDomain).toHaveBeenCalledWith({
          Domain,
          UserPoolId,
        });
      });

      it('saves the domain', () => {
        expect(plugin.saveDomain).toHaveBeenCalledWith(Domain);
      });
    });

    describe('If the domain already exists', () => {
      beforeEach(async () => {
        process.env.USER_POOL_DOMAIN = Domain;
        await plugin.setupUserPoolDomain();
      });

      it('does not call the API', () => {
        expect(plugin.createUserPoolDomain).not.toHaveBeenCalled();
      });
    });
  });

  describe('saveDomain', () => {
    const domain = 'domain';

    beforeEach(() => {
      jest.resetAllMocks();
    });

    const itSetsEnvironment = () => {
      it('sets the USER_POOL_DOMAIN environment variable', () => {
        expect(process.env.USER_POOL_DOMAIN).toEqual(domain);
      });
    };

    describe('if there is no local env file yet', () => {
      beforeEach(() => {
        fs.existsSync.mockImplementation(() => false);
        plugin.saveDomain(domain);
      });

      itSetsEnvironment();

      it('writes USER_POOL_DOMAIN into a new env file', () => {
        expect(fs.writeFileSync).toHaveBeenCalledWith(
          ENV_FILE_LOCAL,
          `USER_POOL_DOMAIN=${domain}\n`,
        );
      });
    });

    describe('if there is already a local env file', () => {
      const fileContent = 'OTHER_VAR=value\n';

      beforeEach(() => {
        fs.existsSync.mockImplementation(() => true);
        fs.readFileSync.mockImplementation(() => fileContent);
        plugin.saveDomain(domain);
      });

      itSetsEnvironment();

      it('prepends the USER_POOL_DOMAIN to the env file', () => {
        expect(fs.writeFileSync).toHaveBeenCalledWith(
          ENV_FILE_LOCAL,
          `USER_POOL_DOMAIN=${domain}\n${fileContent}`,
        );
      });
    });
  });
});
