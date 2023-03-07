import { Injectable } from '@angular/core';
import {addDoc, collection, collectionData, deleteDoc, doc, Firestore, setDoc} from "@angular/fire/firestore"
import { Observable } from 'rxjs';
import {Author} from "../models/Author"
@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  authorLoged: Author = {
    id: "",
    email: "",
    name: "",
    lastName: ""
  }
  authorT: Author = {
    id: "",
    email: "",
    name: "",
    lastName: ""
  }
  constructor(private fireStore: Firestore) { }

  addAuthor(author: Author){
    const id = author.id
    const email = author.email
    const name = author.name
    const lastName = author.lastName

    const ref = collection(this.fireStore, 'authors')
    return addDoc(ref, { id, email, name, lastName })
  }
  deleteAuthor(author: Author){  
    return deleteDoc(doc(this.fireStore, `authors/${author.id}`))
  }
  getAuthors(): Observable<Author[]>{
    return collectionData(collection(this.fireStore, "authors"), {idField: "id"}) as Observable<Author[]>
  }

  updateAuthor(author: Author){
    const id = author.id
    const email = author.email
    const name = author.name
    const lastName = author.lastName
    return setDoc(doc(this.fireStore, `authors/${author.id}`), {
      "id": id, 
      "email": email, 
      "name": name, 
      "lastName": lastName
    })
  }
}
