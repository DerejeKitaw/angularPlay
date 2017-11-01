import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1AComponent } from './comp1-a.component';

describe('Comp1AComponent', () => {
  let component: Comp1AComponent;
  let fixture: ComponentFixture<Comp1AComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1AComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
