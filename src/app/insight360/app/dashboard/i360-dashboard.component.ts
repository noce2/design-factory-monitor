import { Component } from '@angular/core';
import { DxCircularGaugeModule,
          DxChartModule } from 'devextreme-angular';


@Component({
  templateUrl: './i360-dashboard.component.html',
  styleUrls: ['./i360-dashboard.component.css'],
})

export class Insight360DashboardComponent {
  public mockData = [
    {
      stage: 'Review 1',
      designs: 3,
    }, 
    {
      stage: 'Review 2',
      designs: 2,
    }, 
    {
      stage: 'Review 3',
      designs: 3,
    }, 
    {
      stage: 'Review 4',
      designs: 4,
    }, 
    {
      stage: 'Review 5',
      designs: 6,
    }, 
    {
      stage: 'Review 6',
      designs: 110,
    }, 
    {
      stage: 'Review 7',
      designs: 4,
    },
  ];

}
