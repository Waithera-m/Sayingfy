import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SampleQuotes } from '../sample-quotes';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  
  upvotes: number;
  downvotes: number;
  votes: number;

  @Input() quote: SampleQuotes;
  @Output() isRead = new EventEmitter<boolean>();

  

  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }

  constructor() { 
    
  }

 
  

  ngOnInit(): void {
    
    this.downvotes = 0;
    this.upvotes = 0;
    this.votes = 0;

    
  }

  liked(): boolean{
    this.upvotes +=1;
    this.votes +=1;
    return false;
  }
  disliked(): boolean {
    this.downvotes -= 1;
    this.votes -=1;
    return false;
  }

}
