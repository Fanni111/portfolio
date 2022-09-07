import { Component, OnInit } from '@angular/core';
import { projectCategoryList } from 'src/app/constants';
import { ProjectCategory } from 'src/app/projectItem';

@Component({
  selector: 'floating-menu',
  templateUrl: './floating-menu.component.html',
  styleUrls: ['./floating-menu.component.scss']
})
export class FloatingMenuComponent implements OnInit {

  projectCategoryList: ProjectCategory[];

  constructor() { 
    /*
    $gradBlue: #3EA6DB;
  $gradPink: #CD4AB6;
  $gradGreen: #00FFA9;
  $gradYellow: #E6FF00;*/

    this.projectCategoryList = projectCategoryList;
  }

  ngOnInit(): void {
  }

}
