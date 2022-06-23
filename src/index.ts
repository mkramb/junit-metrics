import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { publish } from './commands/publish';

yargs(hideBin(process.argv))
  .scriptName('asdesktop-cli')
  .demandCommand()
  .strict()
  .command(
    'publish [junitFilePath]',
    'Publish JUNIT results.',
    (yargs) => {
      return yargs
        .positional('junitFilePath', {
          describe: 'Path to JUNIT test export.',
          type: 'string',
        })
        .demandOption('junitFilePath');
    },
    (argv) => {
      publish(argv.junitFilePath);
    }
  )
  .parse();
