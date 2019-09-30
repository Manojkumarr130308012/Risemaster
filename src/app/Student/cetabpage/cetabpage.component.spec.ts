import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CEtabpageComponent } from './cetabpage.component';

describe('CEtabpageComponent', () => {
  let component: CEtabpageComponent;
  let fixture: ComponentFixture<CEtabpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CEtabpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CEtabpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
