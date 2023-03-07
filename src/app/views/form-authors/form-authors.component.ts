import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/app/models/Author';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-form-authors',
  templateUrl: './form-authors.component.html',
  styleUrls: ['./form-authors.component.scss']
})
export class FormAuthorsComponent {
  authorT:Author = {
    id: "",
    email: "",
    name: "",
    lastName: ""
  }
  

  constructor(private authorService: AuthorService, private router: Router){}

  ngOnInit(): void{
    this.authorT = this.authorService.authorT
  }
  updateAuthor(){
    this.authorService.updateAuthor(this.authorT).then(res => {
      console.log(res)
      this.router.navigate(['/authors'])
    }).catch(err => {
      console.log(err)
    })
  }
}
