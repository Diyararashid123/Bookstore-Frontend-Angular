import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

isText:boolean=false
type: string="password";
eyeIcon:string = "fa-eye-slash";

hideShowPass() {
  this.isText = !this.isText;
  if (this.isText) {
    this.type = "text";
    this.eyeIcon = "fa-eye";
  } else {
    this.type = "password";
    this.eyeIcon = "fa-eye-slash";
  }
  throw new Error('Method not implemented.');
  }
}


