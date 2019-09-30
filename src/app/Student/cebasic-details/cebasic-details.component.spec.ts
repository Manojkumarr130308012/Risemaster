import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CEbasicDetailsComponent } from './cebasic-details.component';

describe('CEbasicDetailsComponent', () => {
  let component: CEbasicDetailsComponent;
  let fixture: ComponentFixture<CEbasicDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CEbasicDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CEbasicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
