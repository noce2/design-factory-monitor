import {Component, ViewChild} from "@angular/core";
import {Wizard} from "clarity-angular";

@Component({
  selector: 'wizard-createaccount',
  templateUrl: `./create-account-wizard.component.html`,
  styleUrls: ['./create-account-wizard.component.css'],
})
export class CreateAccountWizardComponent {
    @ViewChild("wizardmd") wizardMedium: Wizard;

    mdOpen: boolean = true;
}