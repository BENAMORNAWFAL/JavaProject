import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { UiComponentscrumRoutes } from './ui-components.routing';

// ui components
import { AppBadgescrumComponent } from './badge/badge.component';
import { AppListsscrumComponent } from './developerslist/lists.component';
import { AppListsscrumDevComponent } from './taskslists/listsdev.component';
import { AppMenuComponent } from '../menuscrum/menu.component';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UiComponentscrumRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    MatNativeDateModule,
  ],
  declarations: [
    AppBadgescrumComponent,
    AppListsscrumComponent,
    AppListsscrumDevComponent,
    AppMenuComponent,
  ],
})
export class UicomponentscrumModule {}
