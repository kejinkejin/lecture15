import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {DbService} from '../db.service';
import { Subscription } from "rxjs/Rx";
@Component({
  selector: 'app-studentpage',
  template: `
  <div *ngIf="exist">
    <p>stduent id: {{student.id}}</p>
    <p>stduent name: {{student.name}}</p>
    <p>stduent email: {{student.email}}</p>
  </div>
  <div *ngIf="!exist">
    can not find student
  </div>
  `,
  styleUrls: ['./studentpage.component.css']
})
//get the id from the parameter
export class StudentpageComponent  {
  private subscription: Subscription;
  id:string;
  students;
  student;
  exist:boolean=false;
  constructor(private activatedRoute: ActivatedRoute, private dbService:DbService) {
    this.subscription = activatedRoute.params.subscribe((param: any)=>{
      this.id=param['id'];

      this.students = dbService.getData();
      for(let i=0; i<this.students.length; ++i){
        if(this.students[i].id===this.id){
          this.student = this.students[i];
          this.exist = true;
          break;
        }
      }
      //this.student = dbService.getData().filter(data=>{data.id!==this.id})[0];
    });
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
