import { Injectable } from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "@angular/fire/auth"
import { Author, Authors } from '../models/Author';
import { AuthorService } from './author.service';
@Injectable({
  providedIn: 'root'
})

export class UserService {
  email: String = ""
  password: String = ""

  
  constructor(private auth: Auth, private authorS:AuthorService) { }

  logIn({email, password}: any){
    
    return signInWithEmailAndPassword(this.auth, email, password)
  }
  register({email, password}: any){
    return createUserWithEmailAndPassword(this.auth, email,password)
  }
  logOut(){
    return signOut(this.auth)
  }
}
