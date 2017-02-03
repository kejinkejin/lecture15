import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { ActivatedRoute } from "@angular/router";

export class MyCanActivateGuard implements CanActivate {
    parameters;
    isnum:boolean = false;
    
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    this.parameters = state.url.split("/");
    console.log(this.parameters);
    
    this.isnum = /^\d+$/.test(this.parameters[2]);
    if(this.isnum===false){
      alert("student id is wrong");
      return false;
    } 
    return true;
  }
}
