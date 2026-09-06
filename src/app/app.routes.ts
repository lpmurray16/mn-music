import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', loadComponent: () => import('./home').then(m => m.Home), title: 'MN Music | Weddings & Events' },
  { path: 'meet-the-dj', loadComponent: () => import('./meet-the-dj').then(m => m.MeetTheDj), title: 'Meet the DJ | MN Music' },
  { path: '**', redirectTo: '' }
];
