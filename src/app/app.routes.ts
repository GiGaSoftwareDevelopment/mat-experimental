import { Routes } from '@angular/router';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'buttons',
    component: ButtonsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
