import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CEaddressDetailsComponent } from './ceaddress-details.component';

describe('CEaddressDetailsComponent', () => {
  let component: CEaddressDetailsComponent;
  let fixture: ComponentFixture<CEaddressDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CEaddressDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CEaddressDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
