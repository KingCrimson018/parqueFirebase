import { Component } from '@angular/core';
import {AuthorService} from '../../services/author.service'
import { UserService } from 'src/app/services/user.service';
import {Author} from 'src/app/models/Author'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: String = ""
  password: String = ""
  name: String = ""
  lastName: String = ""

  constructor(private router: Router,private authorService: AuthorService, private userService: UserService){}

  register(){
    const email = this.email
    const password = this.password
    

    this.userService.register({email, password}).then(res => {
      console.log(res)
      const author: Author = {
        id: "",
        email: this.email,
        name: this.name,
        lastName: this.lastName
      }
      this.authorService.addAuthor(author)
    }).then(res => {
      this.router.navigate(['/index'])
    }).catch(err => {
      console.log(err)
    })
  }
}
