import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import { StudentsComponent } from "./students/students.component";
import { StudentpageComponent } from "./studentpage/studentpage.component";
import{ErrorpageComponent} from "./errorpage/errorpage.component";
import { MyCanActivateGuard } from "./guards/mycanactivate.guard";
const MY_ROUTES: Routes = [
     { path: '', component: HomeComponent },
     { path: 'students', component: StudentsComponent },
     {path:'profile', component:ErrorpageComponent },
     { path:'profile/:id', component:StudentpageComponent, canActivate:[MyCanActivateGuard]}
     
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
