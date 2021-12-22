import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveableDemo1Component } from './moveable-demo1.component';

describe('MoveableDemo1Component', () => {
  let component: MoveableDemo1Component;
  let fixture: ComponentFixture<MoveableDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveableDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveableDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
