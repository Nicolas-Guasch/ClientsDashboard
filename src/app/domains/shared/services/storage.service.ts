import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Client } from '../models/clients.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  public loadClients() {
    return of([
      { firstName: 'Fox', lastName: 'Mulder', address: 'Vine Street 2790' },
      { firstName: 'Dana', lastName: 'Scully', address: '863rd Street 911' },
    ]);
  }

  public saveClients(clients: Client[]) {}
}
