import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { PhoneListComponent } from './phones/list.component'
import { PhoneDetailComponent } from './phones/detail.component'

const routes: Routes = [
  { path: '', redirectTo: 'phones', pathMatch: 'full' },
  { path: 'phones/:id', component: PhoneDetailComponent },
  { path: 'phones', component: PhoneListComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
