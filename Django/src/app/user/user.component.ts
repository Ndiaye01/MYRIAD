
import { user } from './user';
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import {Serialize, SerializeProperty, Serializable} from 'ts-serializer';
declare let require: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
 


export class UserComponent implements OnInit {


 register;
 text: any;

 constructor(private userService: UserService) {}

 ngOnInit() {
  this.register = {
  username: '',
  password: '',
  email: ''


};

}

 registerUser() {
  this.userService.registerNewUser().subscribe((result: any) => {
    
     console.log(result);
                           this.text = JSON.parse(result.replace(/&quot;/g, '"'));
                 
                           console.log(this.text);
                         });
}
}