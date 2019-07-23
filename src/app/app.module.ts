import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ParentCounterComponent } from './parent-counter/parent-counter.component';
import { ChangeColorDirective } from './change-color.directive';
import { ParentColorComponent } from './parent-color/parent-color.component';
import { ThemeComponent } from './theme/theme.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ParentCounterComponent,
    ChangeColorDirective,
    ParentColorComponent,
    ThemeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
