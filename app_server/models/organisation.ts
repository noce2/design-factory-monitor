export class Organisation {
  constructor(
        public name: string,
        public description: string,
        public permissibleEmailAddresses: RegExp[],
        private uniqueOrgKey: string,
        private dblocation: string,
    ) {
        // an option is to let the user enter the company email suffix
        // an in the constructor, convert that to a RegEx.
  }

  testForOrgKeyMatch(input: string): boolean {
    return input === this.uniqueOrgKey;
  }

  testForEmailMatch(input: string) {
    const arrayOfMatches = this.permissibleEmailAddresses.filter(each => each.test(input)); 
    return arrayOfMatches.length >= 1;
  }
}
