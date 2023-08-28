import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcoursesComponent } from './newcourses.component';

describe('NewcoursesComponent', () => {
  let component: NewcoursesComponent;
  let fixture: ComponentFixture<NewcoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewcoursesComponent]
    });
    fixture = TestBed.createComponent(NewcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
