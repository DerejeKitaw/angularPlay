import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMyNgIfDirectiveComponent } from './test-my-ng-if-directive.component';

describe('TestMyNgIfDirectiveComponent', () => {
  let component: TestMyNgIfDirectiveComponent;
  let fixture: ComponentFixture<TestMyNgIfDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMyNgIfDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMyNgIfDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
