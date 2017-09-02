import { Component, OnInit } from '@angular/core';
import { DesignService } from '../shared/i360-design.service';
import { Design } from '../../../../app_server/models/design';

@Component({
  templateUrl: './i360-audit-list.component.html',
  styleUrls: ['./i360-audit-list.component.css'],
  providers: [DesignService],
})

export class Insight360AuditListComponent implements OnInit {
  constructor(private designService: DesignService) {
    
  } 
  designs: Design[];
  selected: Design[] = [];

  ngOnInit() {
    this.designs = this.designService.getDesignData();
  }

  onAdd() {

  }

  onDelete() {
    
  }
  
  onEdit() {
    
  }    
}
