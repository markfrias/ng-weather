import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { animate } from 'motion';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent {

  
  @ViewChild('spin') myElement: any;
  @Input() weather: any;


  animateMyElement(): void {
    animate(
      this.myElement.nativeElement,
      { rotate: 90},
      { duration: 0.5, easing: 'ease-in' }
    )
  }

}
