import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/app/models/Author';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent {
  authors:Author[] = []
  constructor(private authorService: AuthorService, private router: Router){}

  ngOnInit(): void{
    this.getAuthors()
  }

  getAuthors(){
    this.authorService.getAuthors().subscribe(authors => {
      this.authors = authors
    })
  }
  deleteAuthor(author: Author){
    this.authorService.deleteAuthor(author)
  }
  goToEdit(authorT: Author){
    this.authorService.authorT = authorT
    this.router.navigate(['/form-authors'])
  }

}
