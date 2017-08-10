import {Component, ViewChild} from "@angular/core";
import {Wizard} from "clarity-angular";

import { UserAccount } from "../../../../../app_server/models/user-account";

@Component({
  selector: 'wizard-createaccount',
  templateUrl: `./create-account-wizard.component.html`,
  styleUrls: ['./create-account-wizard.component.css'],
})
export class CreateAccountWizardComponent {
    @ViewChild("wizardlg") wizardLarge: Wizard;
    @ViewChild("myForm") formData: any;

    lgOpen: boolean = true;
    loadingFlag: boolean = false;
    companyNotFoundFlag: boolean = false;
    companyFoundFlag: boolean = false;
    possibleAddresses: RegExp[] = [/@companya\.com$/, /@companyb\.com$/];
    // have to define doCancel because page will prevent doCancel from working
    // if the page had a previous button, you would need to call 
    // this.wizard.previous() manually as well...
    doCancel(): void {
        this.wizardLarge.close();
    }

    onCommit(): void {
        if(this.companyFoundFlag) {
            this.wizardLarge.forceNext();
            // do something else to ensure the next page is pre-poulated
        } else if (this.companyNotFoundFlag) {
            this.wizardLarge.forceNext();
            // do something else to ensure the next page is empty
        }
    }

    testForEmailMatch(): void {
        let value: any = this.formData.value;
        this.loadingFlag = true;
        this.companyNotFoundFlag = false;
        setTimeout(() => {
            if (this.testForMatches(value.answer,this.possibleAddresses).length > 0) {
                this.companyFoundFlag = true; 
            } else {
                this.companyNotFoundFlag = true;
            }
            this.loadingFlag = false;
        }, 1000);
    }

    private testForMatches(stringToTest: string, arrayOfRegExOptions: RegExp[]): RegExp[] {
        let results = arrayOfRegExOptions.filter((each) => each.test(stringToTest));
        return results
    }
}