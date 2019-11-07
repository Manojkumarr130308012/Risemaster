import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertToStudentComponent } from './convert-to-student.component';

describe('ConvertToStudentComponent', () => {
  let component: ConvertToStudentComponent;
  let fixture: ComponentFixture<ConvertToStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertToStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
