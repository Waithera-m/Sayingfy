import { Component, OnInit } from '@angular/core';
import { QuotesShare } from '../quotes-share';
import { QUOTES } from '../existing-quotes';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})

export class QuotesComponent implements OnInit {

  quotes=QUOTES;

  constructor() { }

  ngOnInit(): void {
  }

}
