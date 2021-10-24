export module Args {
  const args = {
    '-prebuild': false
  };

  export function parseArgs(argv: string[]) {
    const optionalArgs = argv.slice(2);

    for (const optionalArg of optionalArgs) {
      if (args[optionalArg as keyof typeof args] !== undefined) {
        args[optionalArg as keyof typeof args] = true;
      } else {
        throw new Error(`${optionalArg} is not valid arg`);
      }
    }

    return args;
  }
}
