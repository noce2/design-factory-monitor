import { Component, OnInit } from '@angular/core';
import { DesignService } from '../shared/i360-design.service';
import { Design } from '../../../../../app_server/models/design';

@Component({
  selector: 'sg-i360-create-list',
  templateUrl: './i360-create-list.component.html',
  styleUrls: ['./i360-create-list.component.css'],
  providers: [DesignService],
})

export class Insight360CreateListComponent implements OnInit {
  constructor(private designService: DesignService) {
    
  } 
  designs: Design[];
  selected: Design[] = [];
  detail:Design;
  creatingNewDesign = false;
  editingExistingDesign = false;

  ngOnInit() {
    this.designs = this.designService.getDesignData();
  }

  onCreate() {
    // need to put some sort of check in place to make sure 
    // editingExistingDesign cannot be true at the same time
    this.detail = this.designService.createBlankDesign();
    this.creatingNewDesign = true;
  }

  onAdd() {

  }

  onDelete() {
    
  }
  
  onEdit() {
    // need to put some sort of check in place to make sure 
    // creatingNewDesign cannot be true at the same time
    this.detail = this.selected[0];
    this.editingExistingDesign = true;

  }    

  onDetailClose() {
    this.detail = undefined;
    this.creatingNewDesign = this.editingExistingDesign = false;
  }

  onSave() {
    if (this.creatingNewDesign) {
      this.designService.addNewDesign(this.detail);
    } else if (this.editingExistingDesign) {
      this.designService.editExistingDesign(this.detail);
    }
    this.refreshDesignData();
    this.onDetailClose();
  }

  refreshDesignData() {
    this.designs = this.designService.getDesignData();
  }
}
