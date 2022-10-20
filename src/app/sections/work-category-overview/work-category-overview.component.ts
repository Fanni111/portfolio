import { Component, OnInit } from '@angular/core';
import {
  motionDesignCategory,
  projectionMappingCategory,
  videographyCategory,
  webDesignCategory,
} from 'src/app/constants';
import { ProjectCategory } from 'src/app/projectItem';

@Component({
  selector: 'work-category-overview',
  templateUrl: './work-category-overview.component.html',
  styleUrls: ['./work-category-overview.component.scss'],
})
export class WorkCategoryOverviewComponent implements OnInit {
  motionDesignCategory = motionDesignCategory;
  webDesignCategory = webDesignCategory;
  videographyCategory = videographyCategory;
  projectionMappingCategory = projectionMappingCategory;

  constructor() {}

  ngOnInit(): void {}
}
