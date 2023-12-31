import { Routes } from '@angular/router';

// ui
import { AppBadgeComponent } from './badge/badge.component';
import { AppListsComponent } from './Scrumlists/lists.component';
import { AppListsDevComponent } from './Developerlists/listsdev.component';
import { AppProjectsListsComponent } from './Projectslists/listsproject.component';

export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      
      {
        path: 'badge',
        component: AppBadgeComponent,
      },
      {
        path: 'Scrumlists',
        component: AppListsComponent,
      },
      {
        path: 'Developerlists',
        component: AppListsDevComponent,
      },
      {
        path: 'Projectslists',
        component: AppProjectsListsComponent,
      },
    ],
  },
];
