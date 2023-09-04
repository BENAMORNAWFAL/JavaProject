import { Routes } from '@angular/router';
import { AppscrumDashboardComponent } from './dashboard/dashboard.component';

export const PagesRoutesscrum: Routes = [
  {
    path: '',
    component: AppscrumDashboardComponent,
    data: {
      title: 'Starter Page',
    },
  },
];
