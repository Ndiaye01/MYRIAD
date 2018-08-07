import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from "@angular/http";


import { Observable} from 'rxjs' ;
import 'rxjs/add/operator/map';  
import {user} from './user';
import { Response } from '@angular/http';

declare let require: any;
@Injectable()
export class UserService {
  
  private headers = new HttpHeaders().set( 'Content-type', 'application/json' );


  s: any;

  stringify = require('json-stringify-safe');

  constructor(public http: HttpClient) { }


  registerNewUser() {
   

   
    return this.http.get('http://192.168.3.27:8000/index', {responseType: 'text'});
    

  
}
}
