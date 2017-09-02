export class Design {
  constructor(
    public id: string,
    public name: string,
    public creator: string, // should be of type user
    public briefDescription: string,
  ) {
    // should initialise owningSubOrganisation based on the creators SubOrganisation
    // should also initialise at 1 unless supplied a previous stage
    // should the design have methods for instantiating new versions of itself
    // or should that be coupled with the user model and authorisation levels?
  }
}
