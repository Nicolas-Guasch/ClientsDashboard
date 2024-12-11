import { Component, inject } from '@angular/core';
import { ClientsService } from '../../../shared/services/clients.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-clients-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './clients-list.component.html',
  styleUrl: './clients-list.component.css',
})
export class ClientsListComponent {
  constructor(public clients: ClientsService){}
}
