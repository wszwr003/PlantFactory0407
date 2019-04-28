import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrlTimePage } from './contrl-time.page';

describe('ContrlTimePage', () => {
  let component: ContrlTimePage;
  let fixture: ComponentFixture<ContrlTimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContrlTimePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContrlTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
