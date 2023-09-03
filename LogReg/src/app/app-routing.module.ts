import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FullComponent } from './product_owner/layouts/full/full.component';
import {FullComponentscrum} from './scrum_master/layouts/full/fullscrum.component'
const routes: Routes = [
  
  {
      path: '',
    component: AppComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ]
  },

  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/owner/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'owner/dashboard',
        loadChildren: () =>
          import('./product_owner/pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./product_owner/pages/ui-components/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./product_owner/pages/extra/extra.module').then((m) => m.ExtraModule),
      },
    ],
  },
  
  {
    path: '',
    component: FullComponentscrum,
    children: [
      {
        path: '',
        redirectTo: '/scrum/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboardscrum',
        loadChildren: () =>
          import('./scrum_master/pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'ui-componentsscrum',
        loadChildren: () =>
          import('./scrum_master/pages/ui-components/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
      {
        path: 'extrascrum',
        loadChildren: () =>
          import('./scrum_master/pages/extra/extra.module').then((m) => m.ExtraModule),
      },
    ],
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
