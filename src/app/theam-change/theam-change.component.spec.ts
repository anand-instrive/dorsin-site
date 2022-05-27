import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheamChangeComponent } from './theam-change.component';

describe('TheamChangeComponent', () => {
  let component: TheamChangeComponent;
  let fixture: ComponentFixture<TheamChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheamChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheamChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
