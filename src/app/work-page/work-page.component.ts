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
  keleszto: ProjectItem;

  constructor() { 
    this.eskuvoKorzo = new ProjectItem("assets/images/webdesign/eskuvokorzo_mockup.png","Velencei Esküvőkorzó", "Webdesign","A székesfehérvári királyi napok alatt nemzetközi táncosok hangulatos felvonulással, táncokkal és látványos gálával szórakoztatták a közönséget. A legszebb pillanatokról hangulatvideót készítettem.",
    ["assets/images/webdesign/eskuvokorzo_mockup.png", "assets/images/webdesign/eskuvokorzo_nagy_plakat.png", "assets/images/webdesign/scr_eskuvokorzo.jpg"]);
    this.keleszto = new ProjectItem("assets/images/webdesign/keleszto_mockup.png","Kelesztő terasz", "Webdesign","Tavasszal a Kálvin tér közelében nyitotta meg teraszát a Kelesztő melynek kreatív arculatát a logótervezéstől, a kirakati táblákon át a honlap készítésig valósíthattam meg. Kellemes olaszos hangulatú kávézó/pizzéria, ízletes ételekkel és frissítő italokkal várja vendégeit melynek pompás kínálatába egy hangulatvideó elkészítésével biztosítottam betekintést.",
  ["assets/images/webdesign/keleszto_mockup.png", "assets/images/webdesign/etlap_asztalon.png", "assets/images/webdesign/keleszto_oszlop.png"]);
  }

  ngOnInit(): void {
  }

  changePanelState(){
    this.panelOpenState = !this.panelOpenState;
  }

}
