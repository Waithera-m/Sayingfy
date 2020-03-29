import { Component, OnInit, Input } from '@angular/core';
import { QuotesShare } from '../quotes-share';
import { QUOTES } from '../existing-quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: QuotesShare;

  constructor() { }

  ngOnInit(): void {
  }

}
