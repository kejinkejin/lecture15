import { Injectable } from '@angular/core';

@Injectable()
export class DbService {
  private data = [{id:'1', name:'Asaad Saad', email:'asaad@mum.edu'},{id:'2', name:'lala', email:'lala@mum.edu'}];
  constructor() {}

  getData(){
    return this.data;
  }
}
