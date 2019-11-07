import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CEEditFormComponent } from './ce-edit-form.component';

describe('CEEditFormComponent', () => {
  let component: CEEditFormComponent;
  let fixture: ComponentFixture<CEEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CEEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CEEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
