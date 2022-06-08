import { Component, OnInit } from '@angular/core';
import { ProjectItem } from '../projectItem';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.scss']
})
export class WorkPageComponent implements OnInit {

  panelOpenState = false;
  neptanc: ProjectItem;
  kripto: ProjectItem;
  eskuvoKorzo: ProjectItem;
  keleszto: ProjectItem;

  constructor() { 
    this.neptanc = new ProjectItem("assets/images/videography/neptanc.jpg","Fehérvári néptáncfesztivál", "Videography","A székesfehérvári királyi napok alatt nemzetközi táncosok hangulatos felvonulással, táncokkal és látványos gálával szórakoztatták a közönséget. A legszebb pillanatokról hangulatvideót készítettem.",
    ["assets/images/videography/neptanc.jpg", "assets/images/videography/neptanc2.jpg", "assets/images/videography/neptanc3.png"]);
    this.kripto = new ProjectItem("assets/images/webdesign/eskuvokorzo_mockup.png","Kriptovalutákról egyszerűen", "Motion design","A székesfehérvári királyi napok alatt nemzetközi táncosok hangulatos felvonulással, táncokkal és látványos gálával szórakoztatták a közönséget. A legszebb pillanatokról hangulatvideót készítettem.",
    ["assets/images/motiondesign/scr_kripto.jpg"]);
    this.eskuvoKorzo = new ProjectItem("assets/images/webdesign/eskuvokorzo_mockup.png","Velencei Esküvőkorzó", "Webdesign"," nagy napra készülő jegyespárok kiállítása ahol számos érdekes előadás, esküvői szolgáltatók és romantikus hangulat várja az érdeklődőket. Az esemény weboldalának, plakátjainak, szórólapjainak tervezése és kivitelezése mellett egy hangulatvideóval járultam hozzá a rendezvény sikeréhez.",
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
