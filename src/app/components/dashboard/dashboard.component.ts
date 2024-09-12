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
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {
  constructor(private fb: FormBuilder, private auth:AuthService,private router:Router) {}

 


}
