import { Component, OnInit } from '@angular/core';
import { ProjectItem } from '../projectItem';
import { DeviceDetectorService } from '../services/deviceDetectorService';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.scss'],
})
export class WorkPageComponent implements OnInit {
  panelOpenState = false;
  motivapp: ProjectItem;
  kripto: ProjectItem;
  vizio: ProjectItem;
  munkavedelem: ProjectItem;
  enkicsibp: ProjectItem;
  lloyd: ProjectItem;
  neptanc: ProjectItem;
  eskuvoKorzo: ProjectItem;
  keleszto: ProjectItem;

  isMobileDevice: boolean;

  constructor(deviceDetector: DeviceDetectorService) {
    this.motivapp = new ProjectItem(
      'assets/images/videography/neptanc.jpg',
      'Motivapp',
      'Motion design',
      'Egy mobilalkalmazás, mely kreatív jutalomrendszer alkalmazását teszi lehetővé a gyakorlatban. A MotivApp használatával intézményedben oktató tanárok korszerű tanulmányi környezetet teremthetnek a diákoknak. Az applikációt bemutató videó elkészítésével jártultam hozzá a Hiventures támogatásban részült project fejlesztéséhez.',
      [
        'assets/images/motiondesign/motivapp_teacher_phone.png',
        'assets/images/motiondesign/motivapp_img_01.png',
        'assets/images/motiondesign/motivapp_img_02.png',
        'assets/images/motiondesign/motivapp_img_03.png',
        'assets/images/motiondesign/motivapp_img_04.png',
        'assets/images/motiondesign/motivapp_img_05.png',
      ],
      'https://www.youtube.com/embed/g6hJ4Z_0j64'
    );
    this.kripto = new ProjectItem(
      'assets/images/webdesign/eskuvokorzo_mockup.png',
      'Kriptovalutákról egyszerűen',
      'Motion design',
      'Vajon te mennyit tudsz a kriptovaluták világáról? Edukációs céllal készült az MNB OKTATÁSI KLUB: THINK & EXPLAIN! videópályázatára a kriptovaluták témájában. Célja, hogy ez a manapság egyre többet használt pénzügyi fogalom könnyen fogyasztható formában, kreatív megköszelítéssel mindenki számára érthetővé válljon.',
      [
        'assets/images/motiondesign/scr_kripto.jpg',
        'assets/images/motiondesign/src_kripto_01.png',
        'assets/images/motiondesign/src_kripto_02.png',
      ],
      'https://youtube.com/embed/_ljc4qoL5E8'
    );
    this.vizio = new ProjectItem(
      'assets/images/videography/neptanc.jpg',
      'VÍZió',
      'Motion design',
      'A Watervision + 150 című pályázatra készítettem a VÍZió című animációs videót melyben Budapest jelenlegi vízhelyzetének bemutatása mellett a tudatos vízfelhasználás fontosságára szeretném felhívni a figyelmet.',
      [
        'assets/images/motiondesign/vizio_img_01.png',
        'assets/images/motiondesign/vizio_img_02.png',
        'assets/images/motiondesign/vizio_img_03.png',
      ],
      'https://www.youtube.com/embed/0LlYQ1deEZY'
    );
    this.munkavedelem = new ProjectItem(
      'assets/images/videography/neptanc.jpg',
      'Figyelsz rá?',
      'Motion design',
      'A munkavédelem közös ügyünk. Akár munkáltatóként, akár munkavállalóként nap, mint nap felelősséget vállalunk. A videóban a figyelemfelkeltés mestere mutat rá a munkavédelem fontosságára.',
      [
        'assets/images/motiondesign/munkavedelem_img_01.png',
        'assets/images/motiondesign/munkavedelem_img_02.png',
        'assets/images/motiondesign/munkavedelem_img_03.png',
      ],
      'https://www.youtube.com/embed/uM3WDlBJJF4'
    );

    this.eskuvoKorzo = new ProjectItem(
      'assets/images/webdesign/eskuvokorzo_mockup.png',
      'Velencei Esküvőkorzó',
      'Webdesign',
      'A nagy napra készülő jegyespárok kiállítása ahol számos érdekes előadás, esküvői szolgáltatók és romantikus hangulat várja az érdeklődőket. Az esemény weboldalának, plakátjainak, szórólapjainak tervezése és kivitelezése mellett egy hangulatvideóval járultam hozzá a rendezvény sikeréhez.',
      [
        'assets/images/webdesign/eskuvokorzo_mockup.png',
        'assets/images/webdesign/eskuvokorzo_nagy_plakat.png',
        'assets/images/webdesign/scr_eskuvokorzo.jpg',
      ],
      'https://www.youtube.com/embed/g8inxKDBxkg'
    );
    this.keleszto = new ProjectItem(
      'assets/images/webdesign/keleszto_mockup.png',
      'Kelesztő terasz',
      'Webdesign',
      'Tavasszal a Kálvin tér közelében nyitotta meg teraszát a Kelesztő melynek kreatív arculatát a logótervezéstől, a kirakati táblákon át a honlap készítésig valósíthattam meg. Kellemes olaszos hangulatú kávézó/pizzéria, ízletes ételekkel és frissítő italokkal várja vendégeit melynek pompás kínálatába egy hangulatvideó elkészítésével biztosítottam betekintést.',
      [
        'assets/images/webdesign/keleszto_mockup.png',
        'assets/images/webdesign/etlap_asztalon.png',
        'assets/images/webdesign/keleszto_oszlop.png',
      ],
      'https://youtube.com/embed/IxsdwYRmtDw'
    );

    this.neptanc = new ProjectItem(
      'assets/images/videography/neptanc.jpg',
      'Fehérvári néptáncfesztivál',
      'Videography',
      'A székesfehérvári királyi napok alatt nemzetközi táncosok hangulatos felvonulással, táncokkal és látványos gálával szórakoztatták a közönséget. A legszebb pillanatokról hangulatvideót készítettem.',
      [
        'assets/images/videography/neptanc.jpg',
        'assets/images/videography/neptanc2.jpg',
        'assets/images/videography/neptanc3.png',
      ],
      'https://youtube.com/embed/MqIr-0kLktw'
    );

    this.lloyd = new ProjectItem(
      'assets/images/videography/lloyd.jpg',
      'Lloyd veteránautó',
      'Videography',
      'Egy igazi veteránautó, mely visszarepít az időben. Egy népszerű német márkájú kisautó, mely az 50-es években hódított és habár az idő vasfoga megkoptatta de egy kis renoválást követően újra eredeti fényében pompázik. Édesapám szerelmprojektjét vettem lencsevégre. ',
      [
        'assets/images/videography/lloyd.jpg',
        'assets/images/videography/lloyd_back.jpg',
      ],
      'https://youtube.com/embed/Enk6LjPkvDM'
    );

    this.enkicsibp = new ProjectItem(
      'assets/images/videography/neptanc.jpg',
      'Az én kicsi Budapestem',
      'Videography',
      ',,HA LENNE EGY NAPOD EGY VILÁGÖRÖKSÉG VÁROSBAN” címmel hirdetett videópályázatot a Világörökség Városok Szervezete (OWHC Organisation of World Heritage Cities). Erre készítettem el a fővárosunkat megelevenítő kisfilmet ,,Az én kicsi Budapestem”-et. Egy gyerekszobából indulva ismerhetjük meg Budapest történetét, nevezetességeit melyek a szemünk láttára kelnek életre. A videóval a hazai fordulóból továbbjutottam a nemzetközi mezőny élvonalába.',
      [
        'assets/images/videography/budapest_01.png',
        'assets/images/videography/budapest_02.png',
        'assets/images/videography/budapest_03.png',
        'assets/images/videography/budapest_04.png',
      ],
      'https://www.youtube.com/embed/KahvokmjkOo'
    );

    this.isMobileDevice = deviceDetector.isMobileDevice();
    console.log('sss' + this.isMobileDevice);
  }

  ngOnInit(): void {}

  changePanelState() {
    this.panelOpenState = !this.panelOpenState;
  }
}
