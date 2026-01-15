import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CT20Component } from './ct2-0.component';

describe('CT20Component', () => {
  let component: CT20Component;
  let fixture: ComponentFixture<CT20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CT20Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CT20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
