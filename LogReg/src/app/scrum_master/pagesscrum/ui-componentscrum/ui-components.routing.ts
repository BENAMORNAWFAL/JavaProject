import { Routes } from '@angular/router';

// ui
import { AppBadgescrumComponent } from './badge/badge.component';
import { AppListsscrumComponent } from './Scrumlists/lists.component';
import { AppListsscrumDevComponent } from './Developerlists/listsdev.component';


export const UiComponentscrumRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'badge',
        component: AppBadgescrumComponent,
      },
      {
        path: 'Scrumlists',
        component: AppListsscrumComponent,
      },
      {
        path: 'Developerlists',
        component: AppListsscrumDevComponent,
      },
     
    ],
  },
];
