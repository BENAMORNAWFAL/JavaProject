import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FullComponent } from './product_owner/layouts/full/full.component';
import {FullComponentscrum} from './scrum_master/layouts/full/fullscrum.component'
import { HomePageComponent } from './product_owner/pages/homepage/homepage.component';
import {FullComponentscrum} from './scrum_master/layouts/full/fullscrum.component';
import { FullComponentdev } from './Developer/layouts/full/full.component';
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
        path: 'scrum/dashboard',
        loadChildren: () =>
          import('./scrum_master/pagesscrum/pagesscrum.module').then((m) => m.PagesscrumModule),
      },
     
      {
        path: 'ui-componentscrum',
        loadChildren: () =>
          import('./scrum_master/pagesscrum/ui-componentscrum/ui-componentscrum.module').then(
            (m) => m.UicomponentscrumModule
          ),
      },
      {
        path: 'extrascrum',
        loadChildren: () =>
          import('./scrum_master/pagesscrum/extrascrum/extrascrum.module').then((m) => m.ExtrascrumModule),
      },
    ],
  },

  {
    
    path: '',
    component: HomePageComponent,
    children: [
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full',
  },
  {
    path: 'homepage',
    loadChildren: () =>
      import('./product_owner/pages/pages.module').then((m) => m.PagesModule),
  },]
  },{
      component: FullComponentscrum,
      children: [
        {
          path: '',
          redirectTo: '/scrum/dashboard',
          pathMatch: 'full',
        },
        {
          path: 'scrum/dashboard',
          loadChildren: () =>
            import('./scrum_master/pagesscrum/pagesscrum.module').then((m) => m.PagesscrumModule),
        },
      
        {
          path: 'ui-componentscrum',
          loadChildren: () =>
            import('./scrum_master/pagesscrum/ui-componentscrum/ui-componentscrum.module').then(
              (m) => m.UicomponentscrumModule
            ),
        },
        {
          path: 'extrascrum',
          loadChildren: () =>
            import('./scrum_master/pagesscrum/extrascrum/extrascrum.module').then((m) => m.ExtrascrumModule),
        },
      ],
    
  },
  {
    path: '',
      component: FullComponentdev,
      children: [
        {
          path: '',
          redirectTo: '/developer/dashboard',
          pathMatch: 'full',
        },
        {
          path: 'developer/dashboard',
          loadChildren: () =>
            import('./Developer/pages/pages.module').then((m) => m.PagesModule),
        },
      
        {
          path: 'ui-componentdev',
          loadChildren: () =>
            import('./Developer/pages/ui-components/ui-components.module').then(
              (m) => m.UicomponentsdevModule
            ),
        },
        {
          path: 'extradev',
          loadChildren: () =>
            import('./Developer/pages/extra/extra.module').then((m) => m.ExtradevModule),
        },
      ],
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
