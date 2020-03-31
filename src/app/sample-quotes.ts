export class SampleQuotes {
  showQuoteDetails: boolean;
  constructor(public title: string, public quote: string, public author: string, public dateCreated: Date, public addedBy: string, public upvotes: number){
    this.upvotes= 0;
    this.showQuoteDetails=false;
  }
}
