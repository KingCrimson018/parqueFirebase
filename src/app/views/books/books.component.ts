import { Component } from '@angular/core';
import {Book} from "../../models/Book"
import {BookService} from "src/app/services/book.service"
import { Router } from '@angular/router';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  books: Book[] = []

  constructor(private bookService: BookService, private router: Router){}

  ngOnInit(): void{
    this.getBooks()
  }

  getBooks(){
    this.bookService.getBooks().subscribe(books => {
      this.books = books
    })
  }

  deleteBook(book: Book){
    this.bookService.deleteBook(book)
  }
  goToEdit(book: Book){
    this.bookService.bookT = book
    this.router.navigate(['/form-books'])
  }
}
