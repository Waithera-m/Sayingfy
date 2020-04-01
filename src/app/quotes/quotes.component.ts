import { Component, OnInit, OnChanges } from '@angular/core';
import { SampleQuotes } from '../sample-quotes';
import Swal from 'sweetalert2';
import { HighlightMostUpvotesDirective } from '../highlight-most-upvotes.directive';



@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})

export class QuotesComponent implements OnInit {
  
  quotes:SampleQuotes[] = [
    new SampleQuotes('food', 'One cannot think well, love well, sleep well, if one has not dined well', 'Virginia Woolf', new Date(2020, 2, 27), 'Njihia',0),
    new SampleQuotes('hate', 'Hating people is like burning down your own house to get rid of a rat', 'Henry Emerson Fosdick', new Date(2020, 2, 27), 'May', 0),
    new SampleQuotes('equality', 'I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives', 'Jane Austen', new Date(2020, 2, 27), 'Njihia', 0),
    new SampleQuotes('dreams', 'Dreams are representations of what we wish and fear and offer useful insights into what out lives would be if we learned to live without inhibitions', 'Mary Njihia', new Date(2020, 2, 29), 'Njihia', 0),
  ];
 
  
  
  showQuote(index) {
    this.quotes[index].showQuoteDetails = !this.quotes[index].showQuoteDetails;
  }

  //Confirm and delete quote
  
  
  quoteBeGone(isRead, index){
    event.preventDefault();
    if(isRead){
      let toDelete = confirm(`Are you sure you want to delete:  ${this.quotes[index].title}?`)
      
      //Use SweetAlert to confirm quote deletion
      // let toDelete = Swal.fire({
      //   text: `Are you sure you want to delete:  ${this.quotes[index].title}?`,
      //   icon: 'warning',
      //   showCancelButton: true,
      //   confirmButtonColor: 'primary',
      //   confirmButtonText: 'Delete Quote',
      //   cancelButtonColor: 'danger',
      //   cancelButtonText: 'Cancel',
      //   reverseButtons: true,
        
      // }).then((willDelete) => {
      //   if(willDelete) {
      //     Swal.fire('Quote Deleted', 'success')
      //   }else {
      //     Swal.fire('Your quote is safe!')
      //   }
      // })

      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
    
  }
//Push users' quotes to quotes array
  addAddedQuote(quote){
    quote.dateCreated = new Date(quote.dateCreated)
    this.quotes.push(quote)
  }

  //Loop through array and return quote with the highest number of upvotes
  prevVote=0
  currentVote=0
  counter=0
  indexVotes=0

  mostUpvotes(){
    this.prevVote=0
    this.currentVote=0

    for(this.counter=0; this.counter < this.quotes.length; this.counter++){
      this.currentVote = this.quotes[this. counter].upvotes;
      if(this.currentVote > this.prevVote){
        this.prevVote = this.currentVote
        this.indexVotes = this.counter
      }
      return this.quotes[this.indexVotes]
      
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.mostUpvotes()
    
  }
  // //track changes and change badge color: currently not working
  // color= '';

  // ngOnchanges() {
  //   if(this.prevVote > 0){
  //     this.color='lightblue'
  //   }
  // }

}
