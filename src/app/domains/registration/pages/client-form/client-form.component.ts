import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ClientsService } from '../../../shared/services/clients.service';
import { Client } from '../../../shared/models/clients.model';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css',
})
export class ClientFormComponent {
  
  public clientForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  constructor(private router: Router, public clients: ClientsService) {}
  
  public get firstName() {
    return this.clientForm.get('firstName');
  }

  public get lastName() {
    return this.clientForm.get('lastName');
  }

  public get address() {
    return this.clientForm.get('address');
  }

  public registerClient() {
    if (this.clientForm.valid) {
      const newClient: Client = {
        firstName: this.clientForm.value.firstName!,
        lastName: this.clientForm.value.lastName!,
        address: this.clientForm.value.address!,
      };
      this.clients.addClient$.next(newClient);
      this.router.navigate(['/dashboard']);
    }
  }
}
