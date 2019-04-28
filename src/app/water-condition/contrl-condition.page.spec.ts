import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrlConditionPage } from './contrl-condition.page';

describe('ContrlConditionPage', () => {
  let component: ContrlConditionPage;
  let fixture: ComponentFixture<ContrlConditionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContrlConditionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContrlConditionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
