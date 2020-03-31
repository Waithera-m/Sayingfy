import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightMostUpvotes]'
})
export class HighlightMostUpvotesDirective {

  //create new wrapper to indicate which DOM elements will be affected
  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor='cyan';
   }

    
  }


