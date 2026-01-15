import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraezisionstermostatComponent } from './praezisionstermostat.component';

describe('PraezisionstermostatComponent', () => {
  let component: PraezisionstermostatComponent;
  let fixture: ComponentFixture<PraezisionstermostatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PraezisionstermostatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PraezisionstermostatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
