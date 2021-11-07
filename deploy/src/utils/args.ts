export module Args {
  type BooleanKey = keyof typeof args.boolean;
  type KeyValueKey = keyof typeof args.keyValue;

  const args = {
    boolean: {
      '-prebuild': false
    },
    keyValue: {
      repo: '',
      branch: ''
    }
  };

  function validateArgs() {
    for (const keyValueKey of Object.keys(args.keyValue)) {
      if (args.keyValue[keyValueKey as KeyValueKey] === '') {
        throw new Error(`${keyValueKey} should be initilized`);
      }
    }
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

    return args;
  }
}
