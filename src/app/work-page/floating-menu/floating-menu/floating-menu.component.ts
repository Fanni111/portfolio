import { Component, OnInit } from '@angular/core';
import { ProjectCategory } from 'src/app/projectItem';

@Component({
  selector: 'floating-menu',
  templateUrl: './floating-menu.component.html',
  styleUrls: ['./floating-menu.component.scss'],
})
export class FloatingMenuComponent implements OnInit {
  projectCategoryList: ProjectCategory[];

  constructor() {
    /*
    $gradBlue: #3EA6DB;
  $gradPink: #CD4AB6;
  $gradGreen: #00FFA9;
  $gradYellow: #E6FF00;*/

    this.projectCategoryList = [
      new ProjectCategory(
        'assets/images/icon_projector.png',
        'Projection mapping',
        'linear-gradient(to left, #3EA6DB, #CD4AB6)',
        'zsolnay-anchor'
      ),
      new ProjectCategory(
        'assets/images/motion_design_arrow.png',
        'Motion design',
        'linear-gradient(to left, #00FFA9, #3EA6DB)',
        'motivapp-anchor'
      ),
      new ProjectCategory(
        'assets/images/icon_webdesign.png',
        'Web design',
        'linear-gradient(to left, #CD4AB6, #00FFA9)',
        'eskuvokorzo-anchor'
      ),
      new ProjectCategory(
        'assets/images/icon_cam.png',
        'Videography',
        'linear-gradient(to left, #3EA6DB, #CD4AB6)',
        'neptanc-anchor'
      ),
    ];
  }

  ngOnInit(): void {}
}
