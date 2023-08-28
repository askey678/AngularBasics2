import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuycourseComponent } from './buycourse.component';

describe('BuycourseComponent', () => {
  let component: BuycourseComponent;
  let fixture: ComponentFixture<BuycourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuycourseComponent]
    });
    fixture = TestBed.createComponent(BuycourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
