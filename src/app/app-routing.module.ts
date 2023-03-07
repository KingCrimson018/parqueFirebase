import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { AuthorsComponent } from './views/authors/authors.component';
import { BooksComponent } from './views/books/books.component';
import { FormAuthorsComponent } from './views/form-authors/form-authors.component';
import { FormBooksComponent } from './views/form-books/form-books.component';
import { IndexComponent } from './views/index/index.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
        {
          path: 'index',
          component: IndexComponent
        },
        {
          path: 'authors',
          component: AuthorsComponent
        },
        {
          path: 'form-authors',
          component: FormAuthorsComponent
        },
        {
          path: 'books',
          component: BooksComponent
        },
        {
          path: 'form-books',
          component: FormBooksComponent
        },
        
    ]
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
