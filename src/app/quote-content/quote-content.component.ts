import { Component, OnInit, Input } from '@angular/core';
import { SampleQuotes } from '../sample-quotes';

@Component({
  selector: 'app-quote-content',
  templateUrl: './quote-content.component.html',
  styleUrls: ['./quote-content.component.css']
})
export class QuoteContentComponent implements OnInit {

  @Input () quote:SampleQuotes;
  
  constructor() { }

  ngOnInit(): void {
  }

}
