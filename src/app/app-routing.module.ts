import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { QuoteContentComponent } from './quote-content/quote-content.component';

const routes: Routes = [
  {path: '', component: QuoteContentComponent},
  {path: 'details', component: QuoteDetailsComponent},
  {path: 'add', component: QuotesFormComponent},
  {path: 'view', component: QuotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
