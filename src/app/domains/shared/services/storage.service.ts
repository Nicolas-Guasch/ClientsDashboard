import { inject, Injectable } from '@angular/core';
import { catchError, of, throwError } from 'rxjs';
import { Client } from '../models/clients.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  http = inject(HttpClient);
  constructor() {}

  public loadClients() {
    return this.http.get<Client[]>('http://localhost:4200/clientes');
  }

  public addClient(client: Client) {
    return this.http
      .post<Client>('http://localhost:4200/clientes', client)
      .pipe(
        catchError(() => throwError(() => new Error('POST operation failed'))),
      );
  }
}
