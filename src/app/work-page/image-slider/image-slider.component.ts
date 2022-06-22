import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  providers: [NgbCarouselConfig]
})
//perspective slider: https://codepen.io/alexnoz/pen/brazWd 
export class ImageSliderComponent implements OnInit {

  //images = ["assets/images/webdesign/eskuvokorzo_mockup.png", "assets/images/webdesign/eskuvokorzo_nagy_plakat.png"];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;
  @Input('isExpanded') isExpanded: boolean;

  @Input('images') images: string[];
  @Input('videoSrc') videoSrc: string;
  safeUrl: SafeResourceUrl;

constructor(public sanitizer: DomSanitizer) { }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

ngOnInit(): void {
  this.safeUrl= this.sanitizer.bypassSecurityTrustResourceUrl(this.videoSrc);
}

}
