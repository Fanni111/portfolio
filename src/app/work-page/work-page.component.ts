import { Component, OnInit } from '@angular/core';
import { ProjectItem } from '../projectItem';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.scss']
})
export class WorkPageComponent implements OnInit {

  panelOpenState = false;
  eskuvoKorzo: ProjectItem;

  constructor() { 
    this.eskuvoKorzo = new ProjectItem("assets/images/eskuvokorzo_mockup.png","Velencei Esküvőkorzó", "Webdesign","A székesfehérvári királyi napok alatt nemzetközi táncosok hangulatos felvonulással, táncokkal és látványos gálával szórakoztatták a közönséget. A legszebb pillanatokról hangulatvideót készítettem.");
  }

  ngOnInit(): void {
  }

  changePanelState(){
    this.panelOpenState = !this.panelOpenState;
  }

}
