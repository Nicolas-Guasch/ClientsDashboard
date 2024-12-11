import { inject, Injectable } from '@angular/core';
import { catchError, of, throwError } from 'rxjs';
import { Client } from '../models/clients.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly APIURL = 'http://localhost:4200/clientes';
  private http = inject(HttpClient);

  public loadClients() {
    return this.http.get<Client[]>(this.APIURL);
  }

  public addClient(client: Client) {
    return this.http
      .post<Client>(this.APIURL, client)
      .pipe(
        catchError(() => throwError(() => new Error('POST operation failed'))),
      );
  }
}
