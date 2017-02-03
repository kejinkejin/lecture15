import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Import our Routes file
import { myRoutes } from "./app.routes";
import { AppComponent } from './app.component';
import {HomeComponent} from './home.component';
import { StudentsComponent } from './students/students.component';
import {StudentpageComponent} from './studentpage/studentpage.component';

import { MyCanActivateGuard } from "./guards/mycanactivate.guard";
import { ErrorpageComponent } from './errorpage/errorpage.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    StudentpageComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    myRoutes
  ],
  providers: [MyCanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
