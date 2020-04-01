import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { CountDaysPipe } from './count-days.pipe';
import { HighlightMostUpvotesDirective } from './highlight-most-upvotes.directive';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { QuoteContentComponent } from './quote-content/quote-content.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteDetailsComponent,
    CountDaysPipe,
    HighlightMostUpvotesDirective,
    QuotesFormComponent,
    QuoteContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

