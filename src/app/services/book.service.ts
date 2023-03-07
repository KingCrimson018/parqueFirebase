import { Injectable } from '@angular/core';
import { addDoc, collectionData, deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { collection, setDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import {Book} from "../models/Book"

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookT:Book = {
    id: "",
    author: "",
    name: "",
    description: ""
  }
  constructor(private fireStore: Firestore) { }

  addBook(book: Book){
    const id = book.id
    const author = book.author
    const name = book.name
    const description = book.description

    const ref = collection(this.fireStore, "books")
    return addDoc(ref, {id, author, name, description})
  }
  getBooks(): Observable<Book[]> {
    const ref = collection(this.fireStore, "books")
    return collectionData(ref, {idField: "id"}) as Observable<Book[]>
  }
  deleteBook(book: Book){
    return deleteDoc(doc(this.fireStore, `books/${book.id}`))
  }
  updateBook(book: Book){
    const id = book.id
    const author = book.author
    const name = book.name
    const description = book.description
    return setDoc(doc(this.fireStore, `books/${book.id}`), {id, author, name, description})
  }

 getBooksByAuthor(): Observable<Book[]>{
  const ref = collection(this.fireStore, "books/ruyxTgLVmBGCoRBZXozL")
  return collectionData(ref, {idField: "id"}) as Observable<Book[]>
 }
}
