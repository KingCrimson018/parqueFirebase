import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email:String = ""
  password: String = ""

  constructor(private user: UserService, private router: Router){}

  logIn(){
    const email = this.email
    const password = this.password
    this.user.logIn({email, password}).then(res => {
      console.log(res)
      this.router.navigate(['/index'])
    }).catch(err => {
      console.log(err)
    })
  }
}
