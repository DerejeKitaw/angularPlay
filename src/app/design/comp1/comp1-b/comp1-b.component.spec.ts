import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1BComponent } from './comp1-b.component';

describe('Comp1BComponent', () => {
  let component: Comp1BComponent;
  let fixture: ComponentFixture<Comp1BComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1BComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
