import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent1Component } from './child-component1.component';

describe('ChildComponent1Component', () => {
  let component: ChildComponent1Component;
  let fixture: ComponentFixture<ChildComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
