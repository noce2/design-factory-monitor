import { Injectable } from '@angular/core';
import { Design } from '../../../../app_server/models/design';

@Injectable()

export class DesignService {
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
}
