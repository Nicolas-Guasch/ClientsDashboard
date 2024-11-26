import { Injectable, signal, Signal } from '@angular/core';
import { Client } from '../models/clients.model';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  clients = signal<Client[]>([
    { firstName: 'Fox', lastName: 'Mulder', address: 'Vine Street 2790' },
    { firstName: 'Dana', lastName: 'Scully', address: '863rd Street 911' },
  ]);

  constructor() {}

  addClient(newClient: Client) {
    console.log(newClient);
    this.clients.update((list) => [...list, newClient]);
  }
}
