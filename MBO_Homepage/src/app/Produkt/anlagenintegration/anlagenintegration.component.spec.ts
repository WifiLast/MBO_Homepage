import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnlagenintegrationComponent } from './anlagenintegration.component';

describe('AnlagenintegrationComponent', () => {
  let component: AnlagenintegrationComponent;
  let fixture: ComponentFixture<AnlagenintegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnlagenintegrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnlagenintegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
