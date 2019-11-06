import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CEMainPageComponent } from './ce-main-page.component';

describe('CEMainPageComponent', () => {
  let component: CEMainPageComponent;
  let fixture: ComponentFixture<CEMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CEMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CEMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
