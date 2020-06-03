import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {

  }

  ngOnInit() {
 this.registerForm = this.formBuilder.group({
     firstName: ['', Validators.required],
     lastName: ['', Validators.required],
     username: ['', Validators.required],
     password: ['', [Validators.required, Validators.minLength(6)]],
     email: ['', Validators.required],
     usertype: ['', Validators.required],

 });
}

   // getter for access to form fields
   get f() { return this.registerForm.controls; }


  }


