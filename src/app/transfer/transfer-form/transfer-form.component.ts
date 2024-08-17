import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransferService } from '../../core/services/transfer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Transfer } from '../../core/models/transfer.model';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss'],
})
export class TransferFormComponent {
  transferForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private transferService: TransferService,
    private snackBar: MatSnackBar
  ) {
    this.transferForm = this.fb.group({
      originAccount: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      destinationAccount: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      amount: ['', [Validators.required, Validators.min(1)]],
      transferDate: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.transferForm.valid) {
      this.transferService.createTransfer(this.transferForm.value).subscribe(
        (transfer: Transfer) => {
          this.snackBar.open(`Transferência agendada com sucesso! Taxa: ${transfer.fee}`, 'Fechar', {
            duration: 5000,
          });
        },
        (err) => this.snackBar.open('Erro ao agendar transferência: ' + err.message, 'Fechar', {
          duration: 5000,
        })
      );
    }
  }
}
