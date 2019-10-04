import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CEpaymentDetailsComponent } from './cepayment-details.component';

describe('CEpaymentDetailsComponent', () => {
  let component: CEpaymentDetailsComponent;
  let fixture: ComponentFixture<CEpaymentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CEpaymentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CEpaymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
