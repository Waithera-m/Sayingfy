import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SampleQuotes } from '../sample-quotes';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  //newquote template
  newQuote = new SampleQuotes("","","", new Date, "", 0);
  
  //submit form
  @Output() addQuote = new EventEmitter<SampleQuotes>();

  quotesForm: NgForm;

  submitQuote(){
    this.addQuote.emit(this.newQuote);
    if(this.quotesForm.valid){
      this.quotesForm.reset();
    }
    
  }
  
 
  constructor() { }

  ngOnInit(): void {
  }

}
