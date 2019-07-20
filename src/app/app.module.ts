import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ActivateGuard } from './activate.guard';
import { UserService } from './user.service';
import { HomeComponent } from './home/home.component';
import {AppRoutes} from './Routing';
import { MerchantComponent } from './merchant/merchant.component';
import { DeactivateGuard } from './deactivate.guard';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    MerchantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ActivateGuard,UserService,DeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
