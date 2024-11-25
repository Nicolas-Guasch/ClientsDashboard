import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css',
})
export class ClientFormComponent {
  clientForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  get firstName() {
    return this.clientForm.get('firstName');
  }

  get lastName() {
    return this.clientForm.get('lastName');
  }

  get address() {
    return this.clientForm.get('address');
  }

  registerClient() {
    console.log(this.clientForm.value);
  }
}
