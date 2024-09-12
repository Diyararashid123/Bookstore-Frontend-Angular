import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormControl} from "@angular/forms";
import { CommonModule } from "@angular/common";
import ValidateForm from "../../helpers/validateForm";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }



  onLogin() {

    if (this.loginForm.valid ) {
      console.log(this.loginForm.value)
      this.auth.login(this.loginForm.value).subscribe({
        next:(res)=>{
          alert(res.message)
          this.loginForm.reset()
          this.router.navigate(['dashboard']);
        },
        error:(err)=>{
          alert(err.error.message)
        }
      })
    } else{
      ValidateForm.validateALlFormFields(this.loginForm)
    }

  }

  isText: boolean = false;
  type: string = "password";
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth:AuthService,private router:Router) {}

 
  hideShowPass() {
    this.isText = !this.isText;
    if (this.isText) {
      this.type = "text";
      this.eyeIcon = "fa-eye";
    } else {
      this.type = "password";
      this.eyeIcon = "fa-eye-slash";
    }
  }
}
