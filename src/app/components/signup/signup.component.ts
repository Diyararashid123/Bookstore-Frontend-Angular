import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
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
