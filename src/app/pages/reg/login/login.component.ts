import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  standalone: false,
  styleUrls: ['./login.component.css'] 
 
})
export class LoginComponent implements OnInit {
showRegister() {
throw new Error('Method not implemented.');
}
togglePassword(arg0: string,arg1: string) {
throw new Error('Method not implemented.');
}
showLogin() {
throw new Error('Method not implemented.');
}
  loginForm!: FormGroup;
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForms();
  }

  initForms(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.registerForm = this.fb.group({
      names: ['', [Validators.required]],
      surnames: ['', [Validators.required]],
      emailCreate: ['', [Validators.required, Validators.email]],
      passwordCreate: ['', [Validators.required]]
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      console.log('Login Data:', loginData);
      // TODO: Call login service here
    }
  }

  onRegister(): void {
    if (this.registerForm.valid) {
      const registerData = this.registerForm.value;
      console.log('Register Data:', registerData);
      // TODO: Call register service here
    }
  }
}
