import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SampleQuotes } from '../sample-quotes';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: SampleQuotes;
  @Output() isRead = new EventEmitter<boolean>();

  

  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
