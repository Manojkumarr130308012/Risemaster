import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CEqualificationDetailsComponent } from './cequalification-details.component';

describe('CEqualificationDetailsComponent', () => {
  let component: CEqualificationDetailsComponent;
  let fixture: ComponentFixture<CEqualificationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CEqualificationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CEqualificationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
