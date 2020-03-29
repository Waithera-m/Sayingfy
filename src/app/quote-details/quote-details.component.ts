import { Component, OnInit, Input } from '@angular/core';
import { SampleQuotes } from '../sample-quotes';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: SampleQuotes;

  constructor() { }

  ngOnInit(): void {
  }

}
