import { Routes } from '@angular/router';
import { ClientFormComponent } from './domains/registration/pages/client-form/client-form.component';
import { ClientsListComponent } from './domains/dashboard/pages/clients-list/clients-list.component';

export const routes: Routes = [
  { path: 'register', component: ClientFormComponent },
  { path: 'dashboard', component: ClientsListComponent },
  { path: '', redirectTo: 'register', pathMatch: 'full' },
];
