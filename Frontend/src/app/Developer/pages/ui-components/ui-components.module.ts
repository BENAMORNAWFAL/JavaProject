import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { UiComponentsdevRoutes } from './ui-components.routing';

// ui components
import { AppBadgedevComponent } from './badge/badge.component';
import { AppChipsdevComponent } from './chips/chips.component';
import { AppListsdevComponent } from './lists/lists.component';
import { AppMenudevComponent } from './menu/menu.component';
import { AppTooltipsdevComponent } from './tooltips/tooltips.component';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UiComponentsdevRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    MatNativeDateModule,
  ],
  declarations: [
    AppBadgedevComponent,
    AppChipsdevComponent,
    AppListsdevComponent,
    AppMenudevComponent,
    AppTooltipsdevComponent,
  ],
})
export class UicomponentsdevModule {}
