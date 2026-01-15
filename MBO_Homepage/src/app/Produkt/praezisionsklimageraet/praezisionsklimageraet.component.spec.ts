import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraezisionsklimageraetComponent } from './praezisionsklimageraet.component';

describe('PraezisionsklimageraetComponent', () => {
  let component: PraezisionsklimageraetComponent;
  let fixture: ComponentFixture<PraezisionsklimageraetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PraezisionsklimageraetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PraezisionsklimageraetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
