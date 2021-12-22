import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveableDemoComponent } from './moveable-demo.component';

describe('MoveableDemoComponent', () => {
  let component: MoveableDemoComponent;
  let fixture: ComponentFixture<MoveableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveableDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
