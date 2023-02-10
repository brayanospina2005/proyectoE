import { Component } from '@angular/core';
import { Router } from '@angular/router';

const USERNAME1 = 'admin';
const USERNAME2 = 'student';
const PASSWORD = '12345';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userinfo = {
    username1: 'admin',
    username2: 'student',
    nombre: 'usuario',
  }  
  
    username: string = '';
    password: string = '';
    loginError: boolean = false;

    constructor(private router: Router) {

    }

    login() {
        if(this.username === USERNAME1 
          && this.password === PASSWORD) {
            localStorage.setItem('user', JSON.stringify(this.userinfo));
            this.router.navigate(['/main']);
          }
        else if(this.username === USERNAME2 
            && this.password === PASSWORD) {
                localStorage.setItem('user', JSON.stringify(this.userinfo));
                this.router.navigate(['/descripcion']);
                }
        else {
          this.loginError = true;
        }
    }
}
