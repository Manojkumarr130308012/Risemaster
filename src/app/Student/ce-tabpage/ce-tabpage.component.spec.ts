import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeTabpageComponent } from './ce-tabpage.component';

describe('CeTabpageComponent', () => {
  let component: CeTabpageComponent;
  let fixture: ComponentFixture<CeTabpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeTabpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeTabpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
