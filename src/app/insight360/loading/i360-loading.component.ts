import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './i360-loading.component.html',
  styleUrls: ['./i360-loading.component.css'],
})

export class Insight360LoadingComponent implements OnInit {
  constructor(private router: Router) {

  }
  ngOnInit() {
    this.router.navigate(['/insight360/app']);
  }
}
