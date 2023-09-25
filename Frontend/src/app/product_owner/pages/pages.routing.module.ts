import { Routes } from '@angular/router';
import { AppOwnerDashboardComponent } from './dashboard/dashboard.component';


export const PagesRoutes: Routes = [

  {
  path: '',
  component: AppOwnerDashboardComponent,
  data: {
    title: 'Starter Page',
  }
  },
  
  
];
