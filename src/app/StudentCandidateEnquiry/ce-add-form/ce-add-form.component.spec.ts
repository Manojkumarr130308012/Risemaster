import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CEAddFormComponent } from './ce-add-form.component';

describe('CEAddFormComponent', () => {
  let component: CEAddFormComponent;
  let fixture: ComponentFixture<CEAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CEAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CEAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
