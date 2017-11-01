import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2AComponent } from './comp2-a.component';

describe('Comp2AComponent', () => {
  let component: Comp2AComponent;
  let fixture: ComponentFixture<Comp2AComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2AComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
