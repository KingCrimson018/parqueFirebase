import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-form-books',
  templateUrl: './form-books.component.html',
  styleUrls: ['./form-books.component.scss']
})
export class FormBooksComponent {
  book: Book = {
    id: "",
    author: "",
    name: "",
    description: ""
  }

  constructor(private bookService: BookService, private router: Router){}

  ngOnInit(): void {
    this.book = this.bookService.bookT
  }
  submit(){
    if(this.bookService.bookT.id == ""){
      this.addBook()
    }else{
      this.updateBook()
    }
  }

  addBook(){
    this.bookService.addBook(this.book).then(() => {
      this.bookService.bookT = {
        id: "",
        author: "",
        name: "",
        description: ""
      }
      this.router.navigate(['/books'])
    })
  }
  updateBook(){
    this.bookService.updateBook(this.book).then(()=> {
      this.bookService.bookT = {
        id: "",
        author: "",
        name: "",
        description: ""
      }
      this.router.navigate(['/books'])
    })
  }
  cancel(){
    this.bookService.bookT = {
      id: "",
      author: "",
      name: "",
      description: ""
    }
    this.router.navigate(['/books'])
  }
}
