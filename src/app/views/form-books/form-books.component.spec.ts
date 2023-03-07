import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBooksComponent } from './form-books.component';

describe('FormBooksComponent', () => {
  let component: FormBooksComponent;
  let fixture: ComponentFixture<FormBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
