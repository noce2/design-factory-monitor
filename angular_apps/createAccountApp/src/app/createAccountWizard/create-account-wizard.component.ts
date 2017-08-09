import {Component, ViewChild} from "@angular/core";
import {Wizard} from "clarity-angular";

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
    errorFlag: boolean = false;

    // have to define doCancel because page will prevent doCancel from working
    // if the page had a previous button, you would need to call 
    // this.wizard.previous() manually as well...
    doCancel(): void {
        this.wizardLarge.close();
    }

    onCommit(): void {
        let value: any = this.formData.value;
        this.loadingFlag = true;
        this.errorFlag = false;

        setTimeout(() => {
            if (value.answer === "42") {
                this.wizardLarge.forceNext();
            } else {
                this.errorFlag = true;
            }
            this.loadingFlag = false;
        }, 1000);
    }
}