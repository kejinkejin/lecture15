import { Component, OnInit, AfterViewInit } from '@angular/core';
import {DbService} from '../db.service';
@Component({
  selector: 'app-students',
  template:`
  <li *ngFor="let student of students"> <a  href="/profile/{{student.id}}">{{student.name}}</a><br> </li>
  `,
  styleUrls: ['./students.component.css']
})
    
//<a href="/profile/"+{{student.id}}>{{student.name}}</a>
export class StudentsComponent implements AfterViewInit{
  students = [];
  constructor(private dbService:DbService) { 
  }
  ngAfterViewInit() {
    this.students = this.dbService.getData();
  }

}
