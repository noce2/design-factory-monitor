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

  authroisations: String[];
  exportControlRestrictions: String[];

  private addAuthorisation(authorisationToAdd: string):void {
    this.authroisations.push(authorisationToAdd);
  }

  generalUserAuthorisation(): void {
    this.addAuthorisation('General-User');
  }
}