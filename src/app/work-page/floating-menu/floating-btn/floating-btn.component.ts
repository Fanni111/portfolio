import { Component, Input, OnInit } from '@angular/core';
import { ProjectCategory } from 'src/app/projectItem';

@Component({
  selector: 'floating-btn',
  templateUrl: './floating-btn.component.html',
  styleUrls: ['./floating-btn.component.scss']
})
export class FloatingBtnComponent implements OnInit {

  @Input() categoryItem: ProjectCategory;

  constructor() { }

  ngOnInit(): void {
    console.log("ds" + this.categoryItem.icon);
  }

}
