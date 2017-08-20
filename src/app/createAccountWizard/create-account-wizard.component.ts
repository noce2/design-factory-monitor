import { Component, ViewChild } from '@angular/core';
import { Wizard } from 'clarity-angular';

import { User } from '../../../app_server/models/user';
import { Organisation } from '../../../app_server/models/organisation';

@Component({
  selector: 'wizard-createaccount',
  templateUrl: `./create-account-wizard.component.html`,
  styleUrls: ['./create-account-wizard.component.css'],
})
export class CreateAccountWizardComponent {
  @ViewChild('wizardlg') wizardLarge: Wizard;
  @ViewChild('companySearchForm') companySearchFormData: any;
  @ViewChild('aboutYourCompanyForm') aboutYourCompanyFormData: any;
  @ViewChild('aboutYouForm') aboutYouFormData:any;
  @ViewChild('reviewAndSubmitForm') reviewAndSubmitData: any;
  

  lgOpen: boolean = true;
  loadingFlag: boolean = false;
  companyNotFoundFlag: boolean = false;
  companyFoundFlag: boolean = false;
  submittedOrganisation: Organisation = new Organisation('','',[],'','');
  submittedAccount = new User('','','','','','');

    // the following companies are dummy data used to test functionality
  private companyA = new Organisation('Company A','',[/@companya\.com$/],'','');
  private companyB = new Organisation('Company B','',[/@companyb\.com$/],'','');

  private listOfOrganisations: Organisation[] = [this.companyA, this.companyB];
    // have to define doCancel because page will prevent doCancel from working
    // if the page had a previous button, you would need to call 
    // this.wizard.previous() manually as well...
  doCancel(): void {
    this.wizardLarge.close();
  }

  onCommit(): void {
      // the logic behind this control statement is that if the validation
      // has not happened, shown by both flags being false
      // run the validation

      // when the user navigates back to this page I need to ensure both flags are reset
    if (!this.companyFoundFlag && !this.companyNotFoundFlag) {
      this.testForEmailMatch();
    } else {
      this.wizardLarge.forceNext();
    }
  }

  resetFlags(): void {
    this.companyFoundFlag = this.companyNotFoundFlag = false;
  }

  testForEmailMatch(): void {
    const value: any = this.companySearchFormData.value;
    this.loadingFlag = true;
    this.companyNotFoundFlag = false;
    this.companyFoundFlag = false;
    const matchedOrganisations = this.testForMatches(value.email,this.listOfOrganisations);
    setTimeout(() => {
      if (matchedOrganisations.length >= 1) {
        this.companyFoundFlag = true; 
        this.submittedAccount.emailAddress = value.email;
                
                // the purpose of the line below is to initialise
                // an alternative organisation that can be used to set the template view
                // shouldn't have more than one match. need to build in some error checking
        this.submittedOrganisation = matchedOrganisations[0];
        this.submittedAccount.organisation = this.submittedOrganisation.name;
      } else {
        this.companyNotFoundFlag = true;
        
      }
      this.loadingFlag = false;
    },         1000);
  }

  private testForMatches(stringToTest: string, listOfOrganisations: Organisation[]) {
    const results = listOfOrganisations.filter(each => each.testForEmailMatch(stringToTest));
    return results;
  }

  
}
