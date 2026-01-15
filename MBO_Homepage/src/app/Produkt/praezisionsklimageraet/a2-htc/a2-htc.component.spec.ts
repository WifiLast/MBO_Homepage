import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A2HTCComponent } from './a2-htc.component';

describe('A2HTCComponent', () => {
  let component: A2HTCComponent;
  let fixture: ComponentFixture<A2HTCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A2HTCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A2HTCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
