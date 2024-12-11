import {
  computed,
  effect,
  inject,
  Injectable,
  signal,
  Signal,
} from '@angular/core';
import { Client } from '../models/clients.model';
import { Subject } from 'rxjs';
import { StorageService } from './storage.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export interface ClientsState {
  clients: Client[];
  loaded: boolean;
  error: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private state = signal<ClientsState>({
    clients: [],
    loaded: false,
    error: null,
  });

  public clients = computed(() => this.state().clients);
  public loaded = computed(() => this.state().loaded);
  public error = computed(() => this.state().error);

  private clientsLoaded$ = this.storage.loadClients();
  public addClient$ = new Subject<Client>();

  constructor(private storage: StorageService) {
    this.clientsLoaded$.pipe(takeUntilDestroyed()).subscribe({
      next: (clients) =>
        this.state.update((state) => ({ ...state, clients, loaded: true })),
      error: (err) => this.state.update((state) => ({ ...state, error: err })),
    });

    this.addClient$.pipe(takeUntilDestroyed()).subscribe((client) => {
      this.storage.addClient(client).subscribe((client) =>
        this.state.update((state) => ({
          ...state,
          clients: [...state.clients, client],
        })),
      );
    });
  }
}
