import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CEmainPageComponent } from './cemain-page.component';

describe('CEmainPageComponent', () => {
  let component: CEmainPageComponent;
  let fixture: ComponentFixture<CEmainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CEmainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CEmainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
