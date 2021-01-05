import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstFoldComponent } from './first-fold.component';

describe('FirstFoldComponent', () => {
  let component: FirstFoldComponent;
  let fixture: ComponentFixture<FirstFoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstFoldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstFoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
