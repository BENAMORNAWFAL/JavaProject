import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PagesRoutes } from './product_owner/pages/pages.routing.module';
import { PagesRoutesscrum } from './scrum_master/pages/pages.routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

//Import all material modules
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthenticationModule} from './authentication/authentication.module';
import { MatSidenavModule } from '@angular/material/sidenav';
//Import Layouts Product Owner
import { FullComponent } from './product_owner/layouts/full/full.component';
import { BlankComponent } from './product_owner/layouts/blank/blank.component';

//Vertical Layout Product Owner
import { SidebarComponent } from './product_owner/layouts/full/sidebar/sidebar.component';
import { HeaderComponent } from './product_owner/layouts/full/header/header.component';
import { BrandingComponent } from './product_owner/layouts/full/sidebar/branding.component';
import { AppNavItemComponent } from './product_owner/layouts/full/sidebar/nav-item/nav-item.component';
 
//Import Layouts Scrum Master
import { FullComponentscrum } from './scrum_master/layouts/full/fullscrum.component';
import { BlankComponentscrum } from './scrum_master/layouts/blank/blankscrum.component';

//Vertical Layout Scrum Master
import { SidebarComponentscrum } from './scrum_master/layouts/full/sidebar/sidebar.component';
import { HeaderComponentscrum } from './scrum_master/layouts/full/header/header.component';
import { BrandingComponentscrum } from './scrum_master/layouts/full/sidebar/branding.component';
import { AppNavItemComponentscrum } from './scrum_master/layouts/full/sidebar/nav-item/nav-item.component';


@NgModule({
  declarations: [
    AppComponent,
    //Product owner components
    FullComponent,
    BlankComponent,
    SidebarComponent,
    HeaderComponent,
    BrandingComponent,
    AppNavItemComponent,
    //Scrum Master components
    FullComponentscrum,
    BlankComponentscrum,
    SidebarComponentscrum,
    HeaderComponentscrum,
    BrandingComponentscrum,
    AppNavItemComponentscrum,
  ],
  imports: [
    MatSelectModule,
    BrowserModule,
    AuthenticationModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatSidenavModule,
    CommonModule,
    NgApexchartsModule,
    RouterModule.forChild(PagesRoutes),
    RouterModule.forChild(PagesRoutesscrum),
    TablerIconsModule.pick(TablerIcons),
    // TablerIconsModule.pick(TablerIcons),
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
