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
  zsolnay: ProjectItem;
  mapsion: ProjectItem;
  motivapp: ProjectItem;
  kripto: ProjectItem;
  vizio: ProjectItem;
  munkavedelem: ProjectItem;
  enkicsibp: ProjectItem;
  lloyd: ProjectItem;
  neptanc: ProjectItem;
  aldi: ProjectItem;
  eskuvoKorzo: ProjectItem;
  keleszto: ProjectItem;

  isMobileDevice: boolean;

  constructor(deviceDetector: DeviceDetectorService) {
    this.zsolnay = new ProjectItem(
      'assets/images/videography/neptanc.jpg',
      'ZSOLNAY',
      'Projection mapping',
      'Egy mobilalkalmazás, mely kreatív jutalomrendszer alkalmazását teszi lehetővé a gyakorlatban. A MotivApp használatával intézményedben oktató tanárok korszerű tanulmányi környezetet teremthetnek a diákoknak. Az applikációt bemutató videó elkészítésével jártultam hozzá a Hiventures támogatásban részült project fejlesztéséhez.',
      [
        'assets/images/projection mapping/Infinity_02_insta.png',
        'assets/images/projection mapping/Infinity_01_insta.png',
        'assets/images/projection mapping/Infinity_03_insta.png',
      ],
      'https://www.youtube.com/embed/EHPFBkc82B0?enablejsapi=1'
    );
    this.mapsion = new ProjectItem(
      'assets/images/videography/neptanc.jpg',
      'MAPSION',
      'Projection mapping',
      'Egy mobilalkalmazás, mely kreatív jutalomrendszer alkalmazását teszi lehetővé a gyakorlatban. A MotivApp használatával intézményedben oktató tanárok korszerű tanulmányi környezetet teremthetnek a diákoknak. Az applikációt bemutató videó elkészítésével jártultam hozzá a Hiventures támogatásban részült project fejlesztéséhez.',
      [
        'assets/images/projection mapping/mapsion_mapping_01.png',
        'assets/images/projection mapping/mapsion_mapping_02.png',
        'assets/images/projection mapping/mapsion_mapping_03.png',
      ],
      'https://www.youtube.com/embed/70FXHn7svb8?enablejsapi=1'
    );

    this.motivapp = new ProjectItem(
      'assets/images/videography/neptanc.jpg',
      'MOTIVAPP',
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
      'https://www.youtube.com/embed/g6hJ4Z_0j64?enablejsapi=1'
    );
    this.kripto = new ProjectItem(
      'assets/images/webdesign/eskuvokorzo_mockup.png',
      'CRYPTO',
      'Motion design',
      'Vajon te mennyit tudsz a kriptovaluták világáról? Edukációs céllal készült az MNB OKTATÁSI KLUB: THINK & EXPLAIN! videópályázatára a kriptovaluták témájában. Célja, hogy ez a manapság egyre többet használt pénzügyi fogalom könnyen fogyasztható formában, kreatív megköszelítéssel mindenki számára érthetővé válljon.',
      [
        'assets/images/motiondesign/scr_kripto.jpg',
        'assets/images/motiondesign/src_kripto_01.png',
        'assets/images/motiondesign/src_kripto_02.png',
      ],
      'https://youtube.com/embed/_ljc4qoL5E8?enablejsapi=1'
    );
    this.vizio = new ProjectItem(
      'assets/images/videography/neptanc.jpg',
      'VIZIO',
      'Motion design',
      'A Watervision + 150 című pályázatra készítettem a VÍZió című animációs videót melyben Budapest jelenlegi vízhelyzetének bemutatása mellett a tudatos vízfelhasználás fontosságára szeretném felhívni a figyelmet.',
      [
        'assets/images/motiondesign/vizio_img_01.png',
        'assets/images/motiondesign/vizio_img_02.png',
        'assets/images/motiondesign/vizio_img_03.png',
      ],
      'https://www.youtube.com/embed/0LlYQ1deEZY?enablejsapi=1'
    );
    this.munkavedelem = new ProjectItem(
      'assets/images/videography/neptanc.jpg',
      'MUNKAVEDELEM',
      'Motion design',
      'A munkavédelem közös ügyünk. Akár munkáltatóként, akár munkavállalóként nap, mint nap felelősséget vállalunk. A videóban a figyelemfelkeltés mestere mutat rá a munkavédelem fontosságára.',
      [
        'assets/images/motiondesign/munkavedelem_img_01.png',
        'assets/images/motiondesign/munkavedelem_img_02.png',
        'assets/images/motiondesign/munkavedelem_img_03.png',
      ],
      'https://www.youtube.com/embed/uM3WDlBJJF4?enablejsapi=1'
    );

    this.eskuvoKorzo = new ProjectItem(
      'assets/images/webdesign/eskuvokorzo_mockup.png',
      'ESKUVOKORZO',
      'Webdesign',
      'A nagy napra készülő jegyespárok kiállítása ahol számos érdekes előadás, esküvői szolgáltatók és romantikus hangulat várja az érdeklődőket. Az esemény weboldalának, plakátjainak, szórólapjainak tervezése és kivitelezése mellett egy hangulatvideóval járultam hozzá a rendezvény sikeréhez.',
      [
        'assets/images/webdesign/eskuvokorzo_mockup.png',
        'assets/images/webdesign/eskuvokorzo_nagy_plakat.png',
        'assets/images/webdesign/scr_eskuvokorzo.jpg',
      ],
      'https://www.youtube.com/embed/g8inxKDBxkg?enablejsapi=1'
    );
    this.keleszto = new ProjectItem(
      'assets/images/webdesign/keleszto_mockup.png',
      'KELESZTO',
      'Webdesign',
      'Tavasszal a Kálvin tér közelében nyitotta meg teraszát a Kelesztő melynek kreatív arculatát a logótervezéstől, a kirakati táblákon át a honlap készítésig valósíthattam meg. Kellemes olaszos hangulatú kávézó/pizzéria, ízletes ételekkel és frissítő italokkal várja vendégeit melynek pompás kínálatába egy hangulatvideó elkészítésével biztosítottam betekintést.',
      [
        'assets/images/webdesign/keleszto_mockup.png',
        'assets/images/webdesign/etlap_asztalon.png',
        'assets/images/webdesign/keleszto_oszlop.png',
      ],
      'https://youtube.com/embed/IxsdwYRmtDw?enablejsapi=1'
    );

    this.aldi = new ProjectItem(
      'assets/images/videography/szovetseg_infjusagert.jpg',
      'ALDI',
      'Videography',
      'A székesfehérvári királyi napok alatt nemzetközi táncosok hangulatos felvonulással, táncokkal és látványos gálával szórakoztatták a közönséget. A legszebb pillanatokról hangulatvideót készítettem.',
      ['assets/images/videography/szovetseg_infjusagert.jpg'],
      'https://youtube.com/embed/_ODlPQu0REM?enablejsapi=1'
    );

    this.neptanc = new ProjectItem(
      'assets/images/videography/neptanc.jpg',
      'NEPTANC',
      'Videography',
      'A székesfehérvári királyi napok alatt nemzetközi táncosok hangulatos felvonulással, táncokkal és látványos gálával szórakoztatták a közönséget. A legszebb pillanatokról hangulatvideót készítettem.',
      [
        'assets/images/videography/neptanc.jpg',
        'assets/images/videography/neptanc2.jpg',
        'assets/images/videography/neptanc3.png',
      ],
      'https://youtube.com/embed/MqIr-0kLktw?enablejsapi=1'
    );

    this.lloyd = new ProjectItem(
      'assets/images/videography/lloyd.jpg',
      'LLOYD',
      'Videography',
      'Egy igazi veteránautó, mely visszarepít az időben. Egy népszerű német márkájú kisautó, mely az 50-es években hódított és habár az idő vasfoga megkoptatta de egy kis renoválást követően újra eredeti fényében pompázik. Édesapám szerelmprojektjét vettem lencsevégre. ',
      [
        'assets/images/videography/lloyd.jpg',
        'assets/images/videography/lloyd_back.jpg',
      ],
      'https://youtube.com/embed/Enk6LjPkvDM?enablejsapi=1'
    );

    this.enkicsibp = new ProjectItem(
      'assets/images/videography/neptanc.jpg',
      'BUDAPEST',
      'Videography',
      ',,HA LENNE EGY NAPOD EGY VILÁGÖRÖKSÉG VÁROSBAN” címmel hirdetett videópályázatot a Világörökség Városok Szervezete (OWHC Organisation of World Heritage Cities). Erre készítettem el a fővárosunkat megelevenítő kisfilmet ,,Az én kicsi Budapestem”-et. Egy gyerekszobából indulva ismerhetjük meg Budapest történetét, nevezetességeit melyek a szemünk láttára kelnek életre. A videóval a hazai fordulóból továbbjutottam a nemzetközi mezőny élvonalába.',
      [
        'assets/images/videography/budapest_01.png',
        'assets/images/videography/budapest_02.png',
        'assets/images/videography/budapest_03.png',
        'assets/images/videography/budapest_04.png',
      ],
      'https://www.youtube.com/embed/KahvokmjkOo?enablejsapi=1'
    );

    this.isMobileDevice = deviceDetector.isMobileDevice();
  }

  ngOnInit(): void {}

  changePanelState() {
    this.panelOpenState = !this.panelOpenState;
  }
}
