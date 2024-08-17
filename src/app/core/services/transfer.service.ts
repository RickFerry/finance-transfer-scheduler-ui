import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transfer } from '../models/transfer.model';

@Injectable({
    providedIn: 'root',
})
export class TransferService {
    private baseUrl = 'http://localhost:8080/api/transfers';

    constructor(private http: HttpClient) { }

    getTransfers(): Observable<Transfer[]> {
        return this.http.get<Transfer[]>(this.baseUrl);
    }

    createTransfer(transfer: Transfer): Observable<Transfer> {
        return this.http.post<Transfer>(this.baseUrl, transfer);
    }
}
