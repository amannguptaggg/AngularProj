import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPreloadStrategeyService } from './custom-preload-strategey.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CustomPreloadStrategeyService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('app module loaded');
  }
 }
