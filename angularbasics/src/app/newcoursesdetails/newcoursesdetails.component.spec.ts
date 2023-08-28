import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcoursesdetailsComponent } from './newcoursesdetails.component';

describe('NewcoursesdetailsComponent', () => {
  let component: NewcoursesdetailsComponent;
  let fixture: ComponentFixture<NewcoursesdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewcoursesdetailsComponent]
    });
    fixture = TestBed.createComponent(NewcoursesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
