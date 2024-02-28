const yargs = require('yargs');

const usage = `
Soul | REST and realtime server for SQLite
Usage: soul [options]
`;

let options = undefined;
if (process.env.NO_CLI !== 'true') {
  options = yargs
    .usage(usage)
    .option('d', {
      alias: 'database',
      describe: 'SQLite database file or :memory:',
      type: 'string',
      demandOption: true,
    })
    .option('p', {
      alias: 'port',
      describe: 'Port to listen on',
      type: 'number',
      demandOption: false,
    })
    .option('r', {
      alias: 'rate-limit-enabled',
      describe: 'Enable rate limiting',
      type: 'boolean',
      demandOption: false,
    })
    .option('c', {
      alias: 'cors',
      describe: 'CORS whitelist origins',
      type: 'string',
      demandOption: false,
    })
    .option('V', {
      alias: 'verbose',
      describe: 'Enable verbose logging',
      type: 'string',
      demandOption: false,
      choices: ['console', null],
    })
    .options('e', {
      alias: 'extensions',
      describe: 'Extensions directory path to load',
      type: 'string',
      demandOption: false,
    })
    .options('a', {
      alias: 'auth',
      describe: 'Enable authentication and authorization',
      type: 'boolean',
      default: false,
      demandOption: false,
    })
    .options('js', {
      alias: 'jwtsecret',
      describe: 'JWT secret',
      type: 'string',
      default: null,
      demandOption: false,
    })
    .options('jet', {
      alias: 'jwtexpirationtime',
      describe: 'JWT expiration time',
      type: 'string',
      default: '3D',
      demandOption: false,
    })
    .options('suu', {
      alias: 'initialsuperuserusername',
      describe: 'Initial superuser username',
      type: 'string',
      demandOption: false,
    })
    .options('sup', {
      alias: 'initialsuperuserpassword',
      describe: 'Initial superuser password',
      type: 'string',
      demandOption: false,
    })
    .options('S', {
      alias: 'studio',
      describe: 'Start Soul Studio in parallel',
      type: 'boolean',
      demandOption: false,
    })
    .command('updateuser', 'Update a user', (yargs) => {
      return yargs
        .option('id', {
          describe: 'The ID of the user you want to update',
          type: 'number',
          demandOption: true,
        })
        .option('password', {
          describe: 'The new password for the user you want to update',
          type: 'string',
          demandOption: false,
        })
        .option('is_superuser', {
          describe: 'The role of the user you want to update',
          type: 'boolean',
          demandOption: false,
        });
    })
    .help(true).argv;
}

module.exports = {
  yargs,
  usage,
  options,
};
