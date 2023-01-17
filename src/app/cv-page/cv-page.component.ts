import { Component, OnInit } from '@angular/core';
import { ProjectItem } from '../projectItem';
import { DeviceDetectorService } from '../services/deviceDetectorService';

@Component({
  selector: 'app-cv-page',
  templateUrl: './cv-page.component.html',
  styleUrls: ['./cv-page.component.scss'],
})
export class CvPageComponent implements OnInit {
  panelOpenState = false;
  isMobileDevice: boolean;

  constructor(deviceDetector: DeviceDetectorService) {
    this.isMobileDevice = deviceDetector.isMobileDevice();
  }

  ngOnInit(): void {}

  changePanelState() {
    this.panelOpenState = !this.panelOpenState;
  }
}
