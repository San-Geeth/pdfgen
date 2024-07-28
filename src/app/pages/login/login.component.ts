import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  value: string = '';
  password: string = '';
  btnEnable: boolean = true;

  defaultUserName: string = environment.userName;
  defaultPassword: string = environment.password;

  constructor(private router: Router) {}

  ngOnInit(): void {
    localStorage.clear();
  }

  onLogin() {
    if(this.value && this.password) {
      if(this.value === this.defaultUserName && this.password === this.defaultPassword) {
        localStorage.setItem('currentUser', JSON.stringify({ username: this.value }));
        this.router.navigate(['/home'])
      }
    }
  }

  updateButtonState() {
    this.btnEnable = !(this.value && this.password);
  }
}
