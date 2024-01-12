import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { TecherComponent } from './techer/techer.component';
import { StudentComponent } from './student/student.component';
import { Employee } from './employee';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    TecherComponent,
    StudentComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Employee],
  bootstrap: [AppComponent]
})
export class AppModule { }
