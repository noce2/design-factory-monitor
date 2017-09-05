import { Injectable } from '@angular/core';
import { Design } from '../../../../app_server/models/design';

@Injectable()

export class DesignService {
  // this service will handle retrieving designs from the backend
  // creating new designs and validating data going into a design

  dummyData: Design[] = [
    new Design('1','Design 1', 'Joseph Akingbusi', 'A glorious work of engineering'),
    new Design('2','Design 2', 'Joseph Akingbusi', 'A glorious work of engineering'),
    new Design('3','Design 3', 'Joseph Akingbusi', 'A glorious work of engineering'),
    new Design('4','Design 4', 'Joseph Akingbusi', 'A glorious work of engineering'),
    new Design('5','Design 5', 'Joseph Akingbusi', 'A glorious work of engineering'),
    new Design('6','Design 6', 'Joseph Akingbusi', 'A glorious work of engineering'),
    new Design('7','Design 7', 'Joseph Akingbusi', 'A glorious work of engineering'),
    new Design('8','Design 8', 'Joseph Akingbusi', 'A glorious work of engineering'),
  ];

  getDesignData(): Design[] {
    return (this.dummyData);
  }

  createBlankDesign() {
  // this has been created here rather than on the design class
  // because the design class will not be instantiated 
  // the service, however will be.

    return new Design('','','','');
  }

  addNewDesign(input:Design) {
    // this will need some sort of error checking 
    // so that you can send a message to user when it succeeds
    this.dummyData.push(input);
  }

  editExistingDesign(input:Design) {
    // this will need some serious error checking etc
    // this will also need some sort of error checking 
    // so that you can send a message to user when it succeeds
    const itemToReplace = this.dummyData.findIndex((each) => {
      return each.id === input.id;
    });

    this.dummyData[itemToReplace] = input;
  }
}
