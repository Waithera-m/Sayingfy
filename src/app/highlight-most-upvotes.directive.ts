import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMostUpvotes]'
})
export class HighlightMostUpvotesDirective {

  //create new wrapper to indicate which DOM element will be affected
  constructor(private elem:ElementRef) {this.elem.nativeElement.style.backgroundColor='lightblue'}


  //future implementation: figure out how to use hostbinding and listener to highlight only the quote with the highest number of upvotes.
  // @HostBinding('attr.upvotes') color: string;

  // @HostListener('click') onmostUpvotes(){
  //   this.highlightv("lightblue");
  // }
  
  // private highlightv(color: string){
  //   this.elem.nativeElement.style.backgroundColor='lightblue';
  // }
 }


