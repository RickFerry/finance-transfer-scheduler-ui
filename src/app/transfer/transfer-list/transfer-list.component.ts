import { Component, OnInit } from '@angular/core';
import { TransferService } from '../../core/services/transfer.service';
import { Transfer } from '../../core/models/transfer.model';

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.scss'],
})
export class TransferListComponent implements OnInit {
  transfers: Transfer[] = [];
  displayedColumns: string[] = ['id', 'originAccount', 'destinationAccount', 'amount', 'fee', 'transferDate', 'schedulingDate'];

  constructor(private transferService: TransferService) { }

  ngOnInit(): void {
    this.loadTransfers();
  }

  loadTransfers(): void {
    this.transferService.getTransfers().subscribe((data) => {
      this.transfers = data;
    });
  }
}
