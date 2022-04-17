import { Component, Input, OnInit } from '@angular/core';
import { ProjectItem } from '../projectItem';

@Component({
  selector: 'expandable-project-item',
  templateUrl: './expandable-project-item.component.html',
  styleUrls: ['./expandable-project-item.component.scss']
})
export class ExpandableProjectItemComponent implements OnInit {

  panelOpenState = false;
  @Input('projectItem') projectItem: ProjectItem;

  constructor() { }

  ngOnInit(): void {
  }

  changePanelState(){
    this.panelOpenState = !this.panelOpenState;
  }


}
