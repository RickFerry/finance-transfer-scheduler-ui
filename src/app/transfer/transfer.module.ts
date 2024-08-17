// transfer/transfer.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { TransferFormComponent } from './transfer-form/transfer-form.component';
import { TransferListComponent } from './transfer-list/transfer-list.component';

@NgModule({
  declarations: [TransferFormComponent, TransferListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [TransferFormComponent, TransferListComponent]
})
export class TransferModule {}