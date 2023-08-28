import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApphelpComponent } from './apphelp.component';

describe('ApphelpComponent', () => {
  let component: ApphelpComponent;
  let fixture: ComponentFixture<ApphelpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApphelpComponent]
    });
    fixture = TestBed.createComponent(ApphelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
