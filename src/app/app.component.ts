
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'login-register-app';

  ngOnInit() {
    this.passwordAccess('password', 'loginPassword');
    this.passwordAccess('passwordCreate', 'loginPasswordCreate');
    this.toggleForms();
  }

  passwordAccess(loginPass: string, loginEye: string) {
    const input = document.getElementById(loginPass) as HTMLInputElement;
    const iconEye = document.getElementById(loginEye) as HTMLElement;
    
    iconEye.addEventListener('click', () => {
      input.type = input.type === 'password' ? 'text' : 'password';
      iconEye.classList.toggle('ri-eye-fill');
      iconEye.classList.toggle('ri-eye-off-fill');
    });
  }

  toggleForms() {
    const loginAccessRegister = document.getElementById('loginAccessRegister') as HTMLElement;
    const buttonRegister = document.getElementById('loginButtonRegister') as HTMLElement;
    const buttonAccess = document.getElementById('loginButtonAccess') as HTMLElement;

    buttonRegister.addEventListener('click', () => {
      loginAccessRegister.classList.add('active');
    });

    buttonAccess.addEventListener('click', () => {
      loginAccessRegister.classList.remove('active');
    });
  }
}
