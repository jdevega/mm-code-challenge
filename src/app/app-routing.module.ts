import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { PhoneListComponent } from './phones/list.component'
import { PhoneDetailComponent } from './phones/detail.component'
 
const routes: Routes = [
  { path: '', redirectTo: '/phones', pathMatch: 'full' },
  { path: 'phones',  component: PhoneListComponent },
  { path: 'phones/:id', component: PhoneDetailComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}