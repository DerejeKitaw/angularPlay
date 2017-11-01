import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2BComponent } from './comp2-b.component';

describe('Comp2BComponent', () => {
  let component: Comp2BComponent;
  let fixture: ComponentFixture<Comp2BComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2BComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
