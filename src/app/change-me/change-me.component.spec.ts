import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeMeComponent } from './change-me.component';

describe('ChangeMeComponent', () => {
  let component: ChangeMeComponent;
  let fixture: ComponentFixture<ChangeMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
