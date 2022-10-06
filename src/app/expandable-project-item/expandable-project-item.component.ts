import { Component, Input, OnInit } from '@angular/core';
import { ProjectItem } from '../projectItem';

@Component({
  selector: 'expandable-project-item',
  templateUrl: './expandable-project-item.component.html',
  styleUrls: ['./expandable-project-item.component.scss', './expandable-project-item-base.component.scss']
})
export class ExpandableProjectItemComponent implements OnInit {

  panelOpenState = false;
  @Input('projectItem') projectItem: ProjectItem;
  @Input() topPadding: number;
  @Input() isLeftAligned: boolean;
  @Input() isMobileDevice: boolean;

  constructor() { }

  ngOnInit(): void {
    console.log("---" + this.isMobileDevice);
  }

  changePanelState(){
    this.panelOpenState = !this.panelOpenState;
  }


}
