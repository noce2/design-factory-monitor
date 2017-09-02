export class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public organisation: string,
    public emailAddress: string,
    public companyID: string,
    public jobTitle: string,
  ) {
    
  }

  authorisations: String[];
  exportControlRestrictions: String[];

  private addAuthorisation(authorisationToAdd: string):void {
    this.authorisations.push(authorisationToAdd);
  }

  generalUserAuthorisation(): void {
    this.addAuthorisation('General-User');
  }
}
