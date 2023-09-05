import { Routes } from '@angular/router';

// ui
import { AppBadgedevComponent } from './badge/badge.component';
import { AppChipsdevComponent } from './chips/chips.component';
import { AppListsdevComponent } from './lists/lists.component';
import { AppMenudevComponent } from './menu/menu.component';
import { AppTooltipsdevComponent } from './tooltips/tooltips.component';

export const UiComponentsdevRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'badge',
        component: AppBadgedevComponent,
      },
      {
        path: 'chips',
        component: AppChipsdevComponent,
      },
      {
        path: 'lists',
        component: AppListsdevComponent,
      },
      {
        path: 'menu',
        component: AppMenudevComponent,
      },
      {
        path: 'tooltips',
        component: AppTooltipsdevComponent,
      },
    ],
  },
];
