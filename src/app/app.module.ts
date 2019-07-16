import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentPortalComponent } from './student-portal/student-portal.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
MatButtonModule,
MatMenuModule,
MatToolbarModule,
MatIconModule,
MatCardModule,
MatFormFieldModule,
MatInputModule,
MatDatepickerModule,
MatNativeDateModule,
MatRadioModule,
MatSlideToggleModule        
} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    StudentPortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
MatMenuModule,
MatToolbarModule,
MatIconModule,
MatCardModule,
MatFormFieldModule,
MatInputModule,
MatDatepickerModule,
MatNativeDateModule,
MatRadioModule,
MatSlideToggleModule
  ],
  exports:[
MatButtonModule,
MatMenuModule,
MatToolbarModule,
MatIconModule,
MatCardModule,
MatFormFieldModule,
MatInputModule,
MatDatepickerModule,
MatNativeDateModule,
MatRadioModule,
MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
