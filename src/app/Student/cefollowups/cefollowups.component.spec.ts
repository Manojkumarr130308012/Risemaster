import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CEfollowupsComponent } from './cefollowups.component';

describe('CEfollowupsComponent', () => {
  let component: CEfollowupsComponent;
  let fixture: ComponentFixture<CEfollowupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CEfollowupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CEfollowupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
