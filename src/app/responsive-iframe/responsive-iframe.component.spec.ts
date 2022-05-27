import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveIframeComponent } from './responsive-iframe.component';

describe('ResponsiveIframeComponent', () => {
  let component: ResponsiveIframeComponent;
  let fixture: ComponentFixture<ResponsiveIframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveIframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
