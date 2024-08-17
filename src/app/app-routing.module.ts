import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferListComponent } from './transfer/transfer-list/transfer-list.component';
import { TransferFormComponent } from './transfer/transfer-form/transfer-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/transfers', pathMatch: 'full' },
  { path: 'transfers', component: TransferListComponent },
  { path: 'schedule', component: TransferFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
