import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualifiationTypeComponent } from './qualifiation-type.component';

describe('QualifiationTypeComponent', () => {
  let component: QualifiationTypeComponent;
  let fixture: ComponentFixture<QualifiationTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualifiationTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualifiationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
