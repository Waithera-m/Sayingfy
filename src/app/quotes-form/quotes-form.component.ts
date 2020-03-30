import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SampleQuotes } from '../sample-quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {


  newQuote = new SampleQuotes("","","", new Date, "");
  @Output() addQuote = new EventEmitter<SampleQuotes>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
