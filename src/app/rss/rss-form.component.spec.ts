/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RssFormComponent } from './rss-form.component';

describe('RssFormComponent', () => {
  let component: RssFormComponent;
  let fixture: ComponentFixture<RssFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RssFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RssFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
