export module Args {
  type BooleanKey = keyof typeof args.boolean;
  type KeyValueKey = keyof typeof args.keyValue;

  export const args = {
    boolean: {
      '-is_github_action': process.env.CI !== undefined,
      '-prebuild': false
    },
    keyValue: {
      repo_url: '',
      branch: ''
    }
  };

  function validateArgs() {
    if (!args.boolean['-is_github_action']) {
      return;
    }

    for (const keyValueKey of Object.keys(args.keyValue)) {
      if (args.keyValue[keyValueKey as KeyValueKey] === '') {
        throw new Error(`${keyValueKey} should be initilized`);
      }
    }
  }

  function parse() {
    if (!args.boolean['-is_github_action']) {
      return;
    }

    args.keyValue.branch = args.keyValue.branch.replace('refs/heads/', '');
  }

  export function parseArgs(argv: string[]) {
    const optionalArgs = argv.slice(2);

    for (const optionalArg of optionalArgs) {
      if (optionalArg.startsWith('-')) {
        if (args.boolean[optionalArg as BooleanKey]) {
          args.boolean[optionalArg as BooleanKey] = true;
          continue;
        }
      } else if (optionalArg.includes('=')) {
        const [key, value] = optionalArg.split('=');
        args.keyValue[key as KeyValueKey] = value;
        continue;
      }

      throw new Error(`${optionalArg} is not valid arg`);
    }

    validateArgs();
    parse();
  }
}
