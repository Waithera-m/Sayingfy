import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightMostUpvotes]'
})
export class HighlightMostUpvotesDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor='cyan';
   }

    
  }


